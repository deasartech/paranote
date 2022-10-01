import React, { useState } from "react";
import { BottomSheet, ListItem } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SignOutOverlay } from "../molecules/index";

type BottomSheetComponentProps = {
  isVisible: boolean;
  setIsVisible: any;
  navigation: any;
};

const ProfileBottomSheet: React.FunctionComponent<
  BottomSheetComponentProps
> = ({ isVisible, setIsVisible, navigation }) => {
  const [modal, setModal] = useState(false);

  const toggleOverlay = () => {
    setModal(!modal);
    setIsVisible(false);
  };

  const list = [
    { title: "View Profile", onPress: () => navigation.replace("Profile") },
    { title: "Edit Profile", onPress: () => navigation.replace("EditProfile") },
    {
      title: "Close",
      containerStyle: { backgroundColor: "#eee" },
      titleStyle: { color: "black" },
      onPress: () => setIsVisible(false),
    },
    {
      title: "Sign out",
      containerStyle: { backgroundColor: "#f43f5e" },
      titleStyle: { color: "white" },
      onPress: () => toggleOverlay(),
    },
  ];

  return (
    <SafeAreaProvider>
      <SignOutOverlay
        modal={modal}
        setModal={setModal}
        navigation={navigation}
      />
      <BottomSheet isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default ProfileBottomSheet;
