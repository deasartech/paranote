import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

import ProfileTab from "../molecules/ProfileTab";
import ProfileTabView from "../molecules/ProfileTabView";

type IMyProps = {
  index: any;
  setIndex: any;
  username: any;
  notesCount: any;
  bio: string;
  joined: any;
  url: string;
  repliesCount: number;
  subsCount: number;
  location: any;
};

const ProfileBottom: FunctionComponent<IMyProps> = ({
  index,
  setIndex,
  username,
  notesCount,
  bio,
  joined,
  url,
  repliesCount,
  subsCount,
  location,
}: IMyProps) => {
  return (
    <View style={styles.centerBottom}>
      <ProfileTab index={index} setIndex={setIndex} />

      <ProfileTabView
        index={index}
        setIndex={setIndex}
        username={username}
        notesCount={notesCount}
        bio={bio}
        joined={joined}
        url={url}
        repliesCount={repliesCount}
        subsCount={subsCount}
        location={location}
      />
    </View>
  );
};

export default ProfileBottom;

const styles = StyleSheet.create({
  centerBottom: {
    height: "60%",
    backgroundColor: "#fff",
    // flexDirection: "row",
    // alignItems: "center",
    // paddingLeft: 5,
  },
});
