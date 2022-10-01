import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Text } from "@rneui/themed";
import { fetchCurrentUser, fetchUserByUID } from "../services/api";
import { MainHeader } from "../components/organisms/index";
import { EditProfileListItems } from "../components/molecules/index";

interface IMyProps {
  navigation: any;
}

export interface IItem {
  title: string;
  destination: string;
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

  const items: IItem[] = [];

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      const [user, userId] = res;
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
