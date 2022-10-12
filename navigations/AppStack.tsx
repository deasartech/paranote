import React, { FunctionComponent } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditProfileValue from "../screens/editScreens/EditProfileValue";
import EditProfilePhoto from "../screens/editScreens/EditProfilePhoto";
import PostNoteScreen from "../screens/PostNoteScreen";
import RecordNewNoteScreen from "../screens/RecordNewNoteScreen";

const Stack = createNativeStackNavigator();

const AppStack: FunctionComponent = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen
        name="PostNote"
        component={PostNoteScreen}
        options={{ title: "Back" }}
      />
      <Stack.Group
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen
          name="EditInfo"
          component={EditProfileValue}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="EditPhoto"
          component={EditProfilePhoto}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="RecordNote"
          component={RecordNewNoteScreen}
          options={{ title: "Back" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
