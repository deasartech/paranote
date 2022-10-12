import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { fetchCurrentUser, fetchUserByUID } from "../services/api";
import { MainHeader } from "../components/organisms/index";
import { EditProfileListItems } from "../components/molecules/index";

interface IMyProps {
  navigation: any;
}

export interface IItem {
  title: string;
  description: string;
  destination: string;
  val: string;
}

const EditProfileScreen: FunctionComponent<IMyProps> = ({
  navigation,
}: IMyProps) => {
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState([]);
  const [username, setUsername] = useState("");
  const [notesCount, setNotesCount] = useState(0);
  const [subsCount, setSubsCount] = useState(0);
  const [repliesCount, setRepliesCount] = useState(0);
  const [joined, setJoined] = useState("");
  const [bio, setBio] = useState("n/a");
  const [location, setLocation] = useState("n/a");
  const [url, setUrl] = useState("n/a");
  const [index, setIndex] = useState(0);

  const dimensions = useWindowDimensions();

  const items: IItem[] = [
    {
      title: "profile image",
      description: "Upload a more recent profile image",
      destination: "EditPhoto",
      val: "profile_photo_img_url",
    },
    {
      title: "bio",
      description: "A short description of your background and who you are",
      destination: "EditInfo",
      val: "description",
    },
    {
      title: "location",
      description: "Update your current location",
      destination: "EditInfo",
      val: "location",
    },
    {
      title: "url",
      description:
        "Let people know where they can find out more about you (blog, personal website)",
      destination: "EditInfo",
      val: "url",
    },
    {
      title: "honor/success",
      description:
        "Add your academic or professional achievements to boost your credibility",
      destination: "EditInfo",
      val: "",
    },
  ];

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      const [user, userId]: any = res;
      setEmail(user.email);
      setUid(userId);

      fetchUserByUID(userId).then((response) => {
        console.log(response.user, "user res");
        setProfile(response.user);
        setUsername(response.user.username);
        setNotesCount(response.user.subscribers_count);
        setSubsCount(response.user.notes_count);
        setSubsCount(response.user.notes_count);
        setRepliesCount(response.user.replies_count);
        setJoined(response.user.created_at);
        setBio(response.user.description);
        setLocation(response.user.location);
        setUrl(response.user.url);
      });
    });
  }, []);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <>
      <MainHeader title={"edit profile"} navigation={navigation} />
      <EditProfileListItems navigation={navigation} items={items} uid={uid} />
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
