import { StyleSheet, View, Text } from "react-native";
import { Button } from "@rneui/themed";
import React, { FunctionComponent, useState, useEffect } from "react";
import { fetchSignOutUser, fetchCurrentUser } from "../services/api";

interface IMyProps {
  navigation: any;
}

const HomeScreen: FunctionComponent<IMyProps> = ({ navigation }: IMyProps) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      const [user, userId] = res;
      console.log(user, "current user res");
      setEmail(user.email);
    });
  }, []);

  const handleSignOut = () => {
    fetchSignOutUser().then((res) => {
      console.log(res);
      navigation.replace("SignIn");
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{email}</Text>
      <Text>Welcome to paranote</Text>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.button}
          buttonStyle={styles.buttonColor}
          title="Sign Out"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
