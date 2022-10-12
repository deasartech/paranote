import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "../atoms/index";
import { IItem } from "../../screens/EditProfileScreen";

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
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {items.map((item: IItem) => {
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
