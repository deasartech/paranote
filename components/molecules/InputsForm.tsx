import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import InputAuth from "../atoms/InputAuth";
import { IInput } from "../../types/types";

interface IMyProps {
  inputs: IInput[];
}

const InputsForm: FunctionComponent<IMyProps> = ({ inputs }) => {
  return (
    <>
      {inputs.map((input, index) => {
        return (
          <InputAuth
            key={index}
            placeholder={input.placeholder}
            value={input.value}
            func={input.func}
            secureTextEntry={input.secureTextEntry}
          />
        );
      })}
    </>
  );
};

export default InputsForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
  },
});
