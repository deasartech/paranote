import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Text } from "@rneui/themed";
import { patchUserByUID, fetchUserByUID, IEdit } from "../../services/api";
import { ButtonSaveChanges } from "../../components/atoms/index";
import { IButton } from "../../components/organisms/FormOrg";
import { ImagePickerProfileImage } from "../../components/organisms/index";
import * as ImagePicker from "expo-image-picker";

interface IMyProps {
  navigation: any;
  route?: any;
}

export interface IPicker {
  uri: string | null;
  func: any;
}

const EditProfilePhoto: FunctionComponent<IMyProps> = ({
  navigation,
  route,
}: IMyProps) => {
  const [val, setVal] = useState("");
  const [newVal, setNewVal] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);

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
      setUrl(response.user.profile_photo_image_url);
      setName(response.user.username);
    });
  }, []);

  useEffect(() => {
    console.log(image, "image uri");
  }, [image]);

  const handleUpdateInfo = () => {
    // get secure url from our server

    // upload image directly to the s3 bucket

    // post request to server to store upploaded image url

    const info: IEdit = {
      [property]: newVal,
    };
    patchUserByUID(uid, info).then((res) => {
      console.log(res, "patch response screen");
      setNewVal("");
      navigation.goBack();
    });
  };

  // function to open image picker

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // Declare inputs

  const picker: IPicker = {
    uri: image,
    func: pickImage,
  };

  const btn: IButton = {
    title: "Save Changes",
    func: handleUpdateInfo,
  };

  // uri is current users profile image uri
  // func is image picker

  return (
    <>
      <View style={styles.keyboardContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>new {route.params.name}:</Text>
          <ImagePickerProfileImage
            uri={picker.uri}
            func={picker.func}
            name={name}
          />
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
    // backgroundColor: "#bbf7d0",
    paddingBottom: 130,
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
