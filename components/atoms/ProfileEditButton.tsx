import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";

type IMyProps = {
  navigation: any;
};

const ProfileEditButton: FunctionComponent<IMyProps> = ({
  navigation,
}: IMyProps) => {
  return (
    <View style={styles.topBar}>
      <Button
        containerStyle={styles.button}
        buttonStyle={styles.buttonColor}
        title={"Edit Profile"}
        titleStyle={{ fontSize: 13 }}
        onPress={() => navigation.replace("Home")}
      />
    </View>
  );
};

export default ProfileEditButton;

const styles = StyleSheet.create({
  topBar: {
    height: "8%",
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "center",
    padding: 5,
  },
  button: {
    borderRadius: 33,
    width: "30%",
    maxWidth: 150,
    // margin: 5,
  },
  buttonColor: {
    backgroundColor: "#6366f1",
  },
});
