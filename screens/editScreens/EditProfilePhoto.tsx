import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Text } from "@rneui/themed";
import {
  patchUserByUID,
  putImageToBucket,
  fetchUserByUID,
  fetchS3URL,
} from "../../services/api";
import { ButtonPrimary } from "../../components/atoms/index";
import { ImagePickerProfileImage } from "../../components/organisms/index";
import * as ImagePicker from "expo-image-picker";
// import { images } from "../../assets/avatar/index";
import { IEdit, IButton } from "../../types/types";

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
  const [photoUrl, setNewPhotoUrl] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<any>(null);

  const dimensions = useWindowDimensions();

  const property = route.params.propertyToEdit;
  const title = route.params.title;
  const uid = route.params.uid;
  useEffect(() => {
    // console.log(route.params.propertyToEdit, "route");
    fetchUserByUID(uid).then((response) => {
      // console.log(response.user, "user res");
      // console.log(response.user[property], "response property");
      setVal({ ...response.user });
      setNewPhotoUrl(response.user.profile_photo_image_url);
      setName(response.user.username);
    });
  }, []);

  useEffect(() => {
    console.log(image, "image uri");
    // console.log(uid, "uid");
  }, [image, uid]);

  const handleUpdateInfo = async () => {
    // get secure url from our server
    const { url } = await fetchS3URL();
    console.log(url, "client side url");

    // upload image directly to the s3 bucket
    if (url) {
      await putImageToBucket(url, image);
      const imageURL: string = url.split("?")[0];
      console.log(imageURL, "client side image url");

      // patch request to update user profile_photo_image_url

      const info: IEdit = {
        profilePhoto: imageURL,
      };
      patchUserByUID(uid, info).then((res) => {
        console.log(res, "patch response screen");
        setNewVal("");
        navigation.goBack();
      });
    }
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

    console.log(result, "file result");

    if (!result.cancelled) {
      setImage(result.uri);
      setFile(result);
      console.log(result, "result");
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
        <ButtonPrimary title={btn.title} func={btn.func} />
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
