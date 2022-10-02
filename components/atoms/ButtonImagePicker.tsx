import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "@rneui/themed";

import { images } from "../../assets/avatar/index";

interface IMyProps {
  func: any;
}

const ButtonImagePicker: FunctionComponent<IMyProps> = ({ func }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={func}>
      <Image style={styles.addButtonIcon} source={images.addButton} />
    </TouchableOpacity>
  );
};

export default ButtonImagePicker;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: "#f2f2fC",
    borderRadius: 50,
    position: "absolute",
    marginTop: 220,
    right: 90,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },
});
