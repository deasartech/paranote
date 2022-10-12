import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import { InputNewPost } from "../atoms/index";
import { IInput, IDropdown } from "../../types/types";
import { DropdownPicker, InputReferences } from "../atoms/index";

interface IMyProps {
  inputs: IInput[];
  items: IDropdown[];
  value: any;
  func: any;
  references: IInput;
  propertyToEdit: string;
}

const InputsFormPost: FunctionComponent<IMyProps> = ({
  inputs,
  items,
  value,
  func,
  references,
  propertyToEdit,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View style={styles.listContainer}>
        {inputs.map((input, index) => {
          return (
            <InputNewPost
              key={index}
              inputs={input}
              propertyToEdit={input.placeholder}
            />
          );
        })}
        <DropdownPicker
          items={items}
          value={value}
          func={func}
          open={open}
          setOpen={setOpen}
        />
        <InputReferences
          inputs={references}
          propertyToEdit={propertyToEdit}
          open={open}
        />
      </View>
    </>
  );
};

export default InputsFormPost;

const styles = StyleSheet.create({
  listContainer: {
    height: "60%",
    width: "100%",
    paddingHorizontal: 15,
    maxWidth: 500,
    paddingTop: 20,
    marginHorizontal: "auto",
    // backgroundColor: "#fff",
  },
});
