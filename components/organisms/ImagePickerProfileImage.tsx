import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
// import { images } from "../../assets/avatar/index";
import { ImageAvatar } from "../molecules/index";

interface IMyProps {
  uri: string | null;
  func: any;
  name: string;
}

const ImagePickerProfileImage: FunctionComponent<IMyProps> = ({
  uri,
  func,
  name,
}) => {
  return (
    <View style={styles.imageBackground}>
      <ImageAvatar uri={uri} func={func} name={name} />
    </View>
  );
};

export default ImagePickerProfileImage;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});
