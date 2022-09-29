import React, { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Tab, Text, TabView } from "@rneui/themed";
import { fetchCurrentUser, fetchUserByUID } from "../services/api";
import MainHeader from "../components/organisms/MainHeader";

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
      <MainHeader title={"Profile"} navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Button
            containerStyle={styles.button}
            buttonStyle={styles.buttonColor}
            title={"Edit Profile"}
            titleStyle={{ fontSize: 13 }}
            onPress={() => navigation.replace("Home")}
          />
        </View>
        <View style={styles.top}>
          <View style={styles.profileImage}></View>
          <Text style={styles.heading}>{username}</Text>
        </View>

        <View style={styles.centerBottom}>
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: "white",
              height: 3,
            }}
            containerStyle={{ height: "13%", width: "100%" }}
            variant="default"
          >
            <Tab.Item
              // title="Notes"
              // titleStyle={{ fontSize: 12, color: "white" }}
              containerStyle={(active) => ({
                backgroundColor: active ? "#4338ca" : "#6366f1",
              })}
              icon={{ name: "mic", type: "ionicon", color: "white" }}
            />
            <Tab.Item
              // title="Bio"
              // titleStyle={{ fontSize: 12, color: "white" }}
              containerStyle={(active) => ({
                backgroundColor: active ? "#4338ca" : "#6366f1",
              })}
              icon={{ name: "person", type: "ionicon", color: "white" }}
            />
            <Tab.Item
              // title="Honor"
              // titleStyle={{ fontSize: 12, color: "white" }}
              containerStyle={(active) => ({
                backgroundColor: active ? "#4338ca" : "#6366f1",
              })}
              icon={{ name: "school", type: "ionicon", color: "white" }}
            />
          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ width: "100%" }}>
              {/* <Text h1>Pinned Notes</Text> */}
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
                    <Text style={styles.smallText}>
                      Url: {url ? url : "n/a"}
                    </Text>
                    <Text style={styles.smallText}>
                      Location: {location ? location : "n/a"}
                    </Text>
                    <Text style={styles.smallText}>
                      Notes posted: {notesCount}
                    </Text>
                    <Text style={styles.smallText}>
                      Replies sent: {repliesCount}
                    </Text>
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
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: "32%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  topBar: {
    height: "8%",
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "center",
    padding: 5,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#eee",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
    // marginTop: 10,
  },
  center: {
    height: "10%",
    backgroundColor: "#7fbcac",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  centerBottom: {
    height: "60%",
    backgroundColor: "#fff",
    // flexDirection: "row",
    // alignItems: "center",
    // paddingLeft: 5,
  },
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
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 33,
    width: "30%",
    maxWidth: 150,
    // margin: 5,
  },
  buttonColor: {
    backgroundColor: "#6366f1",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
  },
});
