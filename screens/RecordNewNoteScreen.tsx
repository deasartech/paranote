import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
// import { fetchCurrentUser } from "../services/api";
// import { MainHeader } from "../components/organisms/index";
// import { IInput } from "../types/types";
import { Audio } from "expo-av";
import { Button } from "@rneui/themed";
import { RecordingAudio } from "../components/molecules/index";

interface IMyProps {
  navigation: any;
  route: any;
}

const PostNoteScreen: FunctionComponent<IMyProps> = ({
  navigation,
  route,
}: IMyProps) => {
  const [recording, setRecording]: any = useState();
  const [noteUri, setNoteUri]: any = useState();
  const [sound, setSound]: any = useState();
  const [playing, setPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [playingTime, setPlayingTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // fetchCurrentUser().then((res) => {
    //   const [user, userId]: any = res;
    // });
    console.log(route.params.noteInfo, "noteinfo received");
  }, []);

  return (
    <>
      {/* <MainHeader title={"paranote"} navigation={navigation} /> */}
      <View style={styles.container}>
        <Text style={styles.heading}>Record new note</Text>
        <View style={styles.top}></View>
        <RecordingAudio
          recording={recording}
          setRecording={setRecording}
          noteUri={noteUri}
          setNoteUri={setNoteUri}
          sound={sound}
          setSound={setSound}
          playing={playing}
          setPlaying={setPlaying}
          playingTime={playingTime}
          setPlayingTime={setPlayingTime}
          duration={duration}
          setDuration={setDuration}
          recordingTime={recordingTime}
          setRecordingTime={setRecordingTime}
        />
      </View>
    </>
  );
};

export default PostNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
    maxWidth: 500,
    marginHorizontal: "auto",
  },
  top: {
    height: "70%",
    backgroundColor: "#eee",
  },
  bottom: {
    height: "30%",
    alignContent: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  hidden: {
    display: "none",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
