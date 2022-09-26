import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "@rneui/themed";
import React, { FunctionComponent, useState, useEffect } from "react";
import { postLogin, fetchCurrentUser } from "../services/api";

interface IMyProps {
  navigation: any;
}

const SignInScreen: FunctionComponent<IMyProps> = ({
  navigation,
}: IMyProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      const [user, userId] = res;
      console.log(user, "current user res");
      if (userId !== null) {
        navigation.replace("Home");
      }
    });
  }, []);

  const handleSignIn = () => {
    postLogin(email, password)
      .then((res) => {
        console.log(res, "signin res");
        if (res !== undefined) {
          alert(res.msg);
          setEmail("");
          setPassword("");
          navigation.replace("Home");
        } else {
          alert("Invalid username/password");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Hey,</Text>
        <Text style={styles.heading}>Sign in</Text>
        <Text style={styles.heading}>
          or{" "}
          <Text
            // title="SignUp"
            onPress={() => navigation.navigate("SignUp")}
            style={styles.link}
          >
            Create an account
          </Text>
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            // type="email"
            style={styles.input}
          />
          <Input
            placeholder="password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            // type="password"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={styles.button}
            buttonStyle={styles.buttonColor}
            title="Sign in"
            onPress={handleSignIn}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    fontSize: 24,
    color: "#BDCCFF",
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: "white",
    color: "#1f2937",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: -2, height: 4 },
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 33,
    width: "80%",
    margin: 5,
  },
  buttonColor: {
    backgroundColor: "#6366f1",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  buttonOutlineText: {
    color: "#6366f1",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
});
