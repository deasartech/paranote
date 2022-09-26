import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";

interface IMyProps {
  placeholder: string;
  value: string;
  func: any;
  secureTextEntry?: boolean;
}

const InputAuth: FunctionComponent<IMyProps> = ({
  placeholder,
  value,
  func,
  secureTextEntry,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={(text: string) => func(text)}
      // type="email"
      style={styles.input}
      secureTextEntry={secureTextEntry}
      inputContainerStyle={{ borderBottomWidth: 0 }}
    />
  );
};

export default InputAuth;

const styles = StyleSheet.create({
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
  },
});
