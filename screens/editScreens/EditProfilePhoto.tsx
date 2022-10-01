import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Text } from "@rneui/themed";
import { patchUserByUID, fetchUserByUID, IEdit } from "../../services/api";
import {
  InputEditProfile,
  ButtonSaveChanges,
} from "../../components/atoms/index";
import { IInput, IButton } from "../../components/organisms/FormOrg";

interface IMyProps {
  navigation: any;
  route?: any;
}

export interface IItem {
  title: string;
  destination: string;
}

const EditProfilePhoto: FunctionComponent<IMyProps> = ({
  navigation,
  route,
}: IMyProps) => {
  const [newUid, setnewUid] = useState("");
  const [val, setVal] = useState("");
  const [newVal, setNewVal] = useState("");

  const dimensions = useWindowDimensions();

  const property = route.params.propertyToEdit;
  const title = route.params.title;
  const uid = route.params.uid;
  useEffect(() => {
    console.log(route.params.propertyToEdit, "route");
    fetchUserByUID(uid).then((response) => {
      console.log(response.user, "user res");
      console.log(response.user[property], "response property");
      setVal({ ...response.user });
    });
  }, []);

  useEffect(() => {
    console.log(uid, "uid");
    console.log(property, "property");
    console.log(newVal, "new value");
  }, [val, newVal]);

  const handleUpdateInfo = () => {
    const info: IEdit = {
      [property]: newVal,
    };
    patchUserByUID(uid, info).then((res) => {
      console.log(res, "patch response screen");
      setNewVal("");
      navigation.goBack();
    });
  };

  // Declare inputs

  const infoInput: IInput = {
    placeholder: "Enter new information",
    value: newVal,
    func: setNewVal,
    secureTextEntry: false,
  };

  const btn: IButton = {
    title: "Save Changes",
    func: handleUpdateInfo,
  };

  return (
    <>
      <View style={styles.keyboardContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>new {route.params.name}:</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonSaveChanges title={btn.title} func={btn.func} />
      </View>
    </>
  );
};

export default EditProfilePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#bbf7d0",
    paddingBottom: 100,
    height: "60%",
    width: "100%",
    maxWidth: 500,
    marginHorizontal: "auto",

    // alignItems: "center",
    // justifyContent: "center",
  },
  contentContainer: {
    padding: 10,
    height: "100%",
  },
  textContainer: {
    padding: 100,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "60%",
    flex: 1,
    maxWidth: 400,
    padding: 10,
    marginHorizontal: "auto",
  },
});
