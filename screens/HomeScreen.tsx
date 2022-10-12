import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { fetchSignOutUser, fetchCurrentUser } from "../services/api";
import { MainHeader } from "../components/organisms/index";
import { NewNoteSpeedDial } from "../components/atoms/index";

interface IMyProps {
  navigation: any;
}

const HomeScreen: FunctionComponent<IMyProps> = ({ navigation }: IMyProps) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      const [user, userId]: any = res;
      console.log(user, "current user res");
      setEmail(user.email);
    });
  }, []);

  return (
    <>
      <MainHeader title={"paranote"} navigation={navigation} />
      <View style={styles.container}>
        <NewNoteSpeedDial navigation={navigation} />
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
