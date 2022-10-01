import React, { FunctionComponent, useCallback } from "react";
import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import { TabView, Text, Button } from "@rneui/themed";

interface IMyProps {
  index: any;
  setIndex: any;
  username: any;
  notesCount: any;
  bio: string;
  joined: any;
  url: string;
  repliesCount: number;
  subsCount: number;
  location: any;
}

interface IURLProps {
  url: string;
  children?: any;
}

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url }: IURLProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      // title={children}
      onPress={handlePress}
      style={styles.button}
    >
      <Text style={styles.innerButtonText}>
        URL: <Text style={styles.buttonLink}>{url}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const ProfileTabView: FunctionComponent<IMyProps> = ({
  index,
  setIndex,
  username,
  notesCount,
  bio,
  joined,
  url,
  repliesCount,
  subsCount,
  location,
}: IMyProps) => {
  return (
    <TabView
      value={index}
      onChange={setIndex}
      animationType="spring"
      containerStyle={{ overflow: "hidden" }}
    >
      <TabView.Item style={{ width: "100%" }}>
        <View style={styles.innerBottom}>
          <View style={styles.bottom}>
            <Text style={styles.subTitle}>Pinned Notes</Text>
            <Text style={styles.subTitle}>{notesCount}</Text>
          </View>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>
        </View>
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <View style={styles.innerBottom}>
          <View style={styles.bottom}>
            <Text style={styles.subTitle}>Meet {username}</Text>
          </View>
          <View style={styles.bioItem}>
            <View style={styles.bioItemInner}>
              <Text style={styles.smallText}>Joined {joined}</Text>
              <Text style={styles.smallText}>
                {bio ? `Bio: ${bio}` : "This user has no bio :("}
              </Text>
            </View>
          </View>
          <View style={styles.bioItem}>
            <View style={styles.bioItemInner}>
              <Text style={styles.smallText}>
                Location: {location ? location : "n/a"}
              </Text>
              <Text style={styles.smallText}>Notes posted: {notesCount}</Text>
              <Text style={styles.smallText}>Replies sent: {repliesCount}</Text>
              <Text style={styles.smallText}>Subs: {subsCount}</Text>
              <View style={styles.buttonContainer}>
                <OpenURLButton url={url} />
              </View>
            </View>
          </View>
        </View>
      </TabView.Item>
      <TabView.Item style={{ width: "100%" }}>
        <View style={styles.innerBottom}>
          <View style={styles.bottom}>
            <Text style={styles.subTitle}>Success</Text>
          </View>
        </View>
      </TabView.Item>
    </TabView>
  );
};

export default ProfileTabView;

const styles = StyleSheet.create({
  centerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 5,
  },
  smallText: {
    fontSize: 13,
    fontWeight: "bold",
    padding: 5,
  },
  bottom: {
    height: "15%",
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  innerBottom: {
    height: "85%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  bottomItem: {
    height: "50%",
    width: "50%",
    padding: 5,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: "#eee",
  },
  bioItem: {
    height: "90%",
    width: "50%",
    padding: 5,
  },
  bioItemInner: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 400,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  innerButtonText: {
    // flex: 1,
    flexWrap: "wrap",
    fontSize: 13,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 33,
    width: "100%",
    height: 40,
    marginHorizontal: "auto",
    margin: 5,
  },
  buttonLink: {
    color: "blue",
  },
});
