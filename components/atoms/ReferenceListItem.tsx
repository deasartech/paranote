import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { FunctionComponent } from "react";

interface IMyProps {
  func: any;
  refItem: string;
}

const ReferenceListItem: FunctionComponent<IMyProps> = ({
  func,
  refItem,
}: IMyProps) => {
  return (
    <View style={styles.refContainer}>
      <View style={styles.innerLeft}>
        <Text style={styles.textRef}>{refItem}</Text>
      </View>
      <TouchableOpacity
        style={styles.circular}
        onPress={() => func(refItem)}
      ></TouchableOpacity>
    </View>
  );
};

export default ReferenceListItem;

const styles = StyleSheet.create({
  textRef: {
    fontSize: 18,
    fontWeight: "bold",
  },
  refContainer: {
    padding: 5,
    backgroundColor: "#fff",
    width: "80%",
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerLeft: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#FDB5A5",
    borderWidth: 2,
    borderRadius: 7,
    padding: 5,
  },
});
