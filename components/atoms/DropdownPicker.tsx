import React, { FunctionComponent, useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
// You can import from local files
import DropDownPicker from "react-native-dropdown-picker";
import { IDropdown } from "../../types/types";

interface IMyProps {
  items: IDropdown[];
  value: any;
  func: any;
  open: any;
  setOpen: any;
}

const DropdownPicker: FunctionComponent<IMyProps> = ({
  items,
  value,
  func,
  open,
  setOpen,
}) => {
  const onOpen = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <View style={styles.container}>
      <DropDownPicker
        containerStyle={{ height: open ? 220 : 30 }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={func}
        placeholder="Select Topic"
        // setItems={func}
        zIndex={100}
        // dropDownDirection="TOP"
      />
    </View>
  );
};

export default DropdownPicker;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
