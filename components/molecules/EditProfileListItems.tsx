import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { ListItem } from "../atoms/index";

interface IMyProps {
  navigation: any;
  items: any;
  uid: string;
}

const EditProfileListItems: FunctionComponent<IMyProps> = ({
  navigation,
  items,
  uid,
}: IMyProps) => {
  const listArray = [
    {
      title: "profile image",
      description: "Upload a more recent profile image",
      destination: "EditPhoto",
      val: "profile_photo_img_url",
    },
    {
      title: "bio",
      description: "A short description of your background and who you are",
      destination: "EditInfo",
      val: "description",
    },
    {
      title: "location",
      description: "Update your current location",
      destination: "EditInfo",
      val: "location",
    },
    {
      title: "url",
      description:
        "Let people know where they can find out more about you (blog, personal website)",
      destination: "EditInfo",
      val: "url",
    },
    {
      title: "honor/success",
      description:
        "Add your academic or professional achievements to boost your credibility",
      destination: "EditInfo",
      val: "",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {listArray.map((item) => {
          return (
            <ListItem
              navigation={navigation}
              title={item.title}
              description={item.description}
              destination={item.destination}
              val={item.val}
              uid={uid}
            />
          );
        })}
      </View>
    </View>
  );
};

export default EditProfileListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
    maxWidth: 500,
    paddingTop: 20,
    marginHorizontal: "auto",
    // backgroundColor: "#fff",
  },
});
