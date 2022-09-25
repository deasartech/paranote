import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { fetchUsers } from "./services/api";

export default function App() {
  useEffect(() => {
    fetchUsers().then((res) => {
      console.log(res, "res");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Lets do this!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
