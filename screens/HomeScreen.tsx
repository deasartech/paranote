import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { fetchSignOutUser, fetchCurrentUser } from "../services/api";
import ButtonAuth from "../components/atoms/ButtonAuth";
import { MainHeader } from "../components/organisms/index";

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
    <>
      <MainHeader title={"paranote"} navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.heading}>{email}</Text>
        <Text>Welcome to paranote</Text>
        <View style={styles.buttonContainer}>
          <ButtonAuth title={"Sign Out"} func={handleSignOut} />
        </View>
      </View>
    </>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
