import React, { FunctionComponent, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import { IInput, IButton } from "../organisms/FormOrg";

interface IMyProps {
  inputs: IInput;
  propertyToEdit?: string;
}

const InputEditProfile: FunctionComponent<IMyProps> = ({
  inputs,
  propertyToEdit,
}) => {
  useEffect(() => {
    console.log(propertyToEdit, "prop to edit");
  }, [propertyToEdit]);

  const { placeholder, value, func } = inputs;
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={(text: string) => func(text)}
      multiline={propertyToEdit === "description" ? true : false}
      // multiline={true}
      style={styles.input}
      containerStyle={{ height: "100%" }}
      inputContainerStyle={
        propertyToEdit === "description"
          ? styles.inputContainerMultiline
          : styles.inputContainerSingle
      }
    />
  );
};

export default InputEditProfile;

const styles = StyleSheet.create({
  inputContainerMultiline: {
    borderBottomWidth: 0,
    height: "90%",
  },
  inputContainerSingle: {
    borderBottomWidth: 0,
    // height: "90%",
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
    borderBottomWidth: 0,
    height: "95%",
    // justifyContent: "flex-start",
  },
});
