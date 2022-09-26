import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

interface IMyProps {
  title: string;
  func: any;
}

const ButtonAuth: FunctionComponent<IMyProps> = ({ title, func }) => {
  return (
    <Button
      containerStyle={styles.button}
      buttonStyle={styles.buttonColor}
      title={title}
      onPress={func}
    />
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
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
});
