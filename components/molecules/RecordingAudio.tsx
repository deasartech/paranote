import { StyleSheet, View, Text } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Audio } from "expo-av";
import { Button } from "@rneui/themed";
import { ButtonPrimary } from "../atoms/index";

interface IMyProps {
  recording: any;
  setRecording: any;
  noteUri: any;
  setNoteUri: any;
  sound: any;
  setSound: any;
  playing: any;
  setPlaying: any;
  playingTime: any;
  setPlayingTime: any;
  duration: any;
  setDuration: any;
  recordingTime: any;
  setRecordingTime: any;
}

const RecordingAudio: FunctionComponent<IMyProps> = ({
  recording,
  setRecording,
  noteUri,
  setNoteUri,
  sound,
  setSound,
  playing,
  setPlaying,
  playingTime,
  setPlayingTime,
  duration,
  setDuration,
  recordingTime,
  setRecordingTime,
}) => {
  useEffect(() => {}, []);

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
        (status) => setRecordingTime(Math.round(status.durationMillis / 1000))
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    setNoteUri(uri);
    // playSound(uri);
  }

  async function playSound() {
    if (noteUri !== undefined) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        { uri: noteUri },
        { shouldPlay: true },
        // (status) => console.log(status)
        (status) => {
          if (status.isLoaded === true && status.didJustFinish) {
            setPlaying(false);
          } else if (
            status.isLoaded &&
            status.isPlaying &&
            status.durationMillis
          ) {
            setPlayingTime(Math.round(status.positionMillis / 1000));
            setDuration(Math.round(status.durationMillis / 1000));
          }
        }
      );
      setSound(sound);
      setPlaying(true);
      console.log("Playing Sound");
      await sound.playAsync();
    }
  }

  const handleDeleteAudio = () => {
    setNoteUri("");
    setSound("");
    setPlaying(false);
    setPlayingTime(0);
    setRecordingTime(0);
    setDuration(0);
  };

  return (
    <View style={styles.bottom}>
      <View style={styles.timeTextContainer}>
        {noteUri ? (
          <Text style={styles.timeText}>
            playing: {playingTime}s / {recordingTime}s
          </Text>
        ) : (
          <Text style={styles.timeText}>{recordingTime}s</Text>
        )}
      </View>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
        style={noteUri ? styles.hidden : null}
        containerStyle={styles.button}
        buttonStyle={styles.buttonColor}
      />
      <Button
        title={playing ? "Stop" : "Play"}
        onPress={sound ? playSound : playSound}
        style={noteUri ? null : styles.hidden}
        containerStyle={styles.button}
        buttonStyle={styles.buttonColor}
      />
      <Button
        title={"Delete"}
        onPress={handleDeleteAudio}
        style={noteUri ? null : styles.hidden}
        containerStyle={styles.deleteButton}
        buttonStyle={styles.deleteButtonColor}
      />
    </View>
  );
};

export default RecordingAudio;

const styles = StyleSheet.create({
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
  timeTextContainer: {
    marginHorizontal: "auto",
    width: "100%",
    padding: 5,
  },
  timeText: {
    fontSize: 18,
    marginHorizontal: "auto",
    padding: 5,
  },
  button: {
    borderRadius: 33,
    width: "80%",
    marginHorizontal: "auto",
    margin: 5,
  },
  buttonColor: {
    backgroundColor: "#6366f1",
  },
  deleteButton: {
    borderRadius: 33,
    width: "80%",
    marginHorizontal: "auto",
    margin: 5,
  },
  deleteButtonColor: {
    backgroundColor: "#dc2626",
  },
});
