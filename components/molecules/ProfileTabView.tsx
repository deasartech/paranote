import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { TabView, Text } from "@rneui/themed";

type IMyProps = {
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
              <Text style={styles.smallText}>
                {bio ? `Bio: ${bio}` : "This user has no bio :("}
              </Text>
            </View>
          </View>
          <View style={styles.bioItem}>
            <View style={styles.bioItemInner}>
              <Text style={styles.smallText}>Joined {joined}</Text>
              <Text style={styles.smallText}>Url: {url ? url : "n/a"}</Text>
              <Text style={styles.smallText}>
                Location: {location ? location : "n/a"}
              </Text>
              <Text style={styles.smallText}>Notes posted: {notesCount}</Text>
              <Text style={styles.smallText}>Replies sent: {repliesCount}</Text>
              <Text style={styles.smallText}>Subs: {subsCount}</Text>
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
});
