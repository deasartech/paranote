import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { fetchUsers } from "./services/api";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigations/AppStack";

export default function App() {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
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
