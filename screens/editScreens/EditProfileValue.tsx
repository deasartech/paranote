import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Text } from "@rneui/themed";
import { patchUserByUID, fetchUserByUID } from "../../services/api";
import { InputEditProfile, ButtonPrimary } from "../../components/atoms/index";
import { IEdit, IInput, IButton } from "../../types/types";

interface IMyProps {
  navigation: any;
  route?: any;
}

const EditProfileValue: FunctionComponent<IMyProps> = ({
  navigation,
  route,
}: IMyProps) => {
  const [newUid, setnewUid] = useState("");
  const [val, setVal] = useState("");
  const [newVal, setNewVal] = useState("");

  const property = route.params.propertyToEdit;
  const propTitle = route.params.title;
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
    // console.log(uid, "uid");
    // console.log(propTitle, "title");
    // console.log(val[property], "value");
    // console.log(newVal, "new value");
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
    placeholder: `Enter new ${route.params.title}`,
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
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={
            property === "description"
              ? styles.keyboardContainerMultiline
              : styles.keyboardContainerSingle
          }
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>new {route.params.name}:</Text>
            <InputEditProfile inputs={infoInput} propertyToEdit={property} />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title={btn.title} func={btn.func} />
        </View>
      </View>
    </>
  );
};

export default EditProfileValue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  keyboardContainerMultiline: {
    // backgroundColor: "#fff",
    paddingBottom: 100,
    height: "50%",
    width: "100%",
    maxWidth: 500,
    marginHorizontal: "auto",

    // alignItems: "center",
    // justifyContent: "center",
  },
  keyboardContainerSingle: {
    // flex: 1,
    // backgroundColor: "#bbf7d0",
    paddingBottom: 100,
    height: "20%",
    width: "100%",
    maxWidth: 500,
    marginHorizontal: "auto",
  },
  contentContainer: {
    padding: 10,
    height: "100%",
  },
  // textContainer: {
  //   padding: 100,
  //   height: "40%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  text: {
    padding: 10,
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  buttonContainer: {
    width: "60%",
    flex: 1,
    maxWidth: 400,
    padding: 10,
    marginHorizontal: "auto",
  },
});
