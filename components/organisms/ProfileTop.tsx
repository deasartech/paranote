import React, { FunctionComponent } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text, Image } from "@rneui/themed";

type IMyProps = {
  uri: string;
  username: string;
  navigation?: any;
};

const ProfileTop: FunctionComponent<IMyProps> = ({
  uri,
  username,
}: IMyProps) => {
  return (
    <View style={styles.top}>
      <View style={styles.profileImage}>
        <Image
          source={{ uri: uri }}
          containerStyle={styles.profileImage}
          // PlaceholderContent={require("../../assets/avatar/avatar.jpg")}
        />
      </View>
      <Text style={styles.heading}>{username || <ActivityIndicator />}</Text>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: "32%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  topBar: {
    height: "8%",
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "center",
    padding: 5,
  },
  profileImage: {
    aspectRatio: 1,
    height: 140,
    width: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#eee",
    resizeMode: "contain",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
    // marginTop: 10,
  },
});
