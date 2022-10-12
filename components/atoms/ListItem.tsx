import React, { FunctionComponent, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IMyProps {
  navigation: any;
  title: string;
  description: string;
  destination: any;
  val: string;
  uid: string;
}

const ListItem: FunctionComponent<IMyProps> = ({
  navigation,
  title,
  description,
  destination,
  val,
  uid,
}: IMyProps) => {
  useEffect(() => {
    console.log(val, "<< listItem Val");
  }, []);

  return (
    <View style={styles.containerItem}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(destination, {
            propertyToEdit: val,
            title: title,
            name: title,
            uid: uid,
          })
        }
        style={styles.touchableContainer}
      >
        <View style={styles.innerTouchable}>
          <View style={styles.textContainer}>
            <Text style={styles.innerTitle}>{title}</Text>
            <Text style={styles.innerText}>{description}</Text>
          </View>
          <View>
            <Icon
              // reverse
              name="hammer"
              type="ionicon"
              color="#517fa4"
              containerStyle={{ justifyContent: "flex-end" }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  containerItem: {
    height: "15%",
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 5,
    gap: 5,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: -2, height: 4 },
  },
  touchableContainer: {
    height: "100%",
    width: "100%",
    // marginVertical: "auto",
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  innerTouchable: {
    // height: "85%",
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    // flexWrap: "wrap",
    padding: 5,
  },
  textContainer: {
    padding: 10,
    height: "100%",
    width: "90%",
    marginVertical: "auto",
    // alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    padding: 10,
    height: "100%",
    width: "5%",
    marginVertical: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  innerTitle: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
  },
  innerText: {
    fontSize: 13,
    textAlign: "left",
  },
});
