import React, { FunctionComponent } from "react";
import { ButtonImagePicker } from "../atoms/index";
import { Image, Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import { images } from "../../assets/avatar/index";

interface IMyProps {
  uri: string | null;
  func: any;
  name: string;
}

const ImageAvatar: FunctionComponent<IMyProps> = ({
  uri,
  func,
  name,
}: IMyProps) => {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.avatarImage}
        source={uri ? { uri } : images.avatar}
      />
      <ButtonImagePicker func={func} />
      <Text style={styles.usernameText}>{name}</Text>
    </View>
  );
};

export default ImageAvatar;

const styles = StyleSheet.create({
  usernameText: {
    fontSize: 24,
    fontWeight: "700",
    // color: "#eee",
    marginTop: 12,
  },
  avatar: {
    height: "100%",
    alignItems: "center",
    marginTop: "5%",
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: "hidden",
    borderColor: "#ffffff",
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
});
