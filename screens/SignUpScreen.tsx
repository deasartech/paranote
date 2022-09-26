import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { postUser, postLogin, fetchCurrentUser } from "../services/api";
import FormOrg, { IInput, IButton } from "../components/organisms/FormOrg";

interface IMyProps {
  navigation: any;
}

const SignUpScreen: FunctionComponent<IMyProps> = ({
  navigation,
}: IMyProps) => {
  const [username, setUsername] = useState("");
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

  const handleSignUp = () => {
    postUser(username, email, password)
      .then((res) => {
        console.log(res, "sign up res");
        if (res !== undefined) {
          alert("Successfully Created Account");
          setEmail("");
          setPassword("");
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
        } else {
          alert("Invalid email/username/password");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Declare inputs

  const usernameInput: IInput = {
    placeholder: "username",
    value: username,
    func: setUsername,
    secureTextEntry: false,
  };

  const emailInput: IInput = {
    placeholder: "email",
    value: email,
    func: setEmail,
    secureTextEntry: false,
  };

  const passwordInput: IInput = {
    placeholder: "password",
    value: password,
    func: setPassword,
    secureTextEntry: true,
  };

  const btn: IButton = {
    title: "Sign up",
    func: handleSignUp,
  };

  const inputs: IInput[] = [usernameInput, emailInput, passwordInput];

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Hey,</Text>
        <Text style={styles.heading}>Create an account</Text>
        <Text style={styles.heading}>
          or{" "}
          <Text
            // title="Sign up"
            onPress={() => navigation.navigate("SignIn")}
            style={styles.link}
          >
            Sign In
          </Text>
        </Text>
      </View>
      <FormOrg inputs={inputs} button={btn} />
    </>
  );
};

export default SignUpScreen;

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
});
