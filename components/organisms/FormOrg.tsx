import React, { FunctionComponent } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import InputsForm from "../molecules/InputsForm";
import { ButtonPrimary } from "../atoms/index";
import { IInput, IButton } from "../../types/types";

interface IMyProps {
  inputs: IInput[];
  button: IButton;
}

const FormOrg: FunctionComponent<IMyProps> = ({ inputs, button }) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <InputsForm inputs={inputs} />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title={button.title} func={button.func} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default FormOrg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 150,
    alignItems: "center",
    // justifyContent: "center",
  },
  inputContainer: {
    width: "90%",
    maxWidth: 500,
  },
  buttonContainer: {
    width: "60%",
    maxWidth: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
