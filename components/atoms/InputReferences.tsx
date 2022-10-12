import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@rneui/themed";
import { IInput } from "../../types/types";
import { ButtonPrimary } from "./index";

interface IMyProps {
  inputs: IInput;
  propertyToEdit?: string;
  open: any;
}

const InputReferences: FunctionComponent<IMyProps> = ({
  inputs,
  propertyToEdit,
  open,
}) => {
  const [text, setText] = useState("");
  useEffect(() => {}, []);
  const handleAddRef = () => {
    func(text);
    setText("");
  };

  const { placeholder, value, func } = inputs;
  return (
    <View style={open ? styles.hidden : styles.container}>
      <Input
        placeholder={placeholder}
        value={text}
        onChangeText={(text: string) => setText(text)}
        multiline={false}
        style={styles.input}
        // containerStyle={{ height: "100%" }}
        inputContainerStyle={styles.inputContainerSingle}
      />
      <ButtonPrimary title={"Add Reference"} func={handleAddRef} />
    </View>
  );
};

export default InputReferences;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    paddingTop: 20,
  },
  hidden: {
    display: "none",
  },
  inputContainerSingle: {
    borderBottomWidth: 0,
    // height: "90%",
  },
  input: {
    flex: 1,
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
    borderBottomWidth: 0,
    // height: "95%",
    // justifyContent: "flex-start",
  },
});
