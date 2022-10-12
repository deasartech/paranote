import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { postLogin, fetchCurrentUser } from "../services/api";
import FormOrg from "../components/organisms/FormOrg";
import { IInput, IButton } from "../types/types";

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
      const [user, userId]: any = res;
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

  // Declare inputs

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
    title: "Sign in",
    func: handleSignIn,
  };

  const inputs: IInput[] = [emailInput, passwordInput];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
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
          <View style={styles.inputContainer}>
            <FormOrg inputs={inputs} button={btn} />
          </View>
        </View>
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "#bbf7d0",
    // paddingBottom: 100,
    // height: "60%",
    width: "100%",
    height: "100%",
    maxWidth: 500,
    marginHorizontal: "auto",
    // alignItems: "center",
    // justifyContent: "center",
  },
  headingContainer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 40,
  },
  inputContainer: {
    height: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    fontSize: 24,
    color: "#BDCCFF",
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
