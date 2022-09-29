import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Tab } from "@rneui/themed";

type IMyProps = {
  index: any;
  setIndex: any;
};

const ProfileTab: FunctionComponent<IMyProps> = ({
  index,
  setIndex,
}: IMyProps) => {
  return (
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
        containerStyle={(active) => ({
          backgroundColor: active ? "#4338ca" : "#6366f1",
        })}
        icon={{ name: "mic", type: "ionicon", color: "white" }}
      />
      <Tab.Item
        containerStyle={(active) => ({
          backgroundColor: active ? "#4338ca" : "#6366f1",
        })}
        icon={{ name: "person", type: "ionicon", color: "white" }}
      />
      <Tab.Item
        containerStyle={(active) => ({
          backgroundColor: active ? "#4338ca" : "#6366f1",
        })}
        icon={{ name: "school", type: "ionicon", color: "white" }}
      />
    </Tab>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
