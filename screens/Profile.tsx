import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { fetchCurrentUser, fetchUserByUID } from "../services/api";
import { mockAvatar } from "../components/organisms/MainHeader";
import { ProfileTop, ProfileBottom } from "../components/organisms/index";
import { MainHeader } from "../components/organisms/index";
import { ProfileEditButton } from "../components/atoms/index";

interface IMyProps {
  navigation: any;
}

const Profile: FunctionComponent<IMyProps> = ({ navigation }: IMyProps) => {
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
      <MainHeader title={"profile"} navigation={navigation} />
      <View style={styles.container}>
        <ProfileEditButton navigation={navigation} />
        <ProfileTop uri={mockAvatar.image_url} username={username} />
        <ProfileBottom
          index={index}
          setIndex={setIndex}
          username={username}
          notesCount={notesCount}
          bio={bio}
          joined={joined}
          url={url}
          repliesCount={repliesCount}
          subsCount={subsCount}
          location={location}
        />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
