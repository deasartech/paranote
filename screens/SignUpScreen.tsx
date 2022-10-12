import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { postUser, postLogin, fetchCurrentUser } from "../services/api";
import FormOrg from "../components/organisms/FormOrg";
import { IInput, IButton } from "../types/types";

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
      const [user, userId]: any = res;
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
      <View style={styles.container}>
        <View style={styles.innerContainer}>
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
          <View style={styles.inputContainer}>
            <FormOrg inputs={inputs} button={btn} />
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUpScreen;

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
});
