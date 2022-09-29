import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Header as HeaderRNE, Avatar } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileBottomSheet from "../molecules/ProfileBottomSheet";

type HeaderComponentProps = {
  title: string;
  view?: string;
  navigation: any;
};

type AvatarData = {
  image_url: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

export const mockAvatar: AvatarData = {
  image_url: "https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk",
};

const MainHeader: React.FunctionComponent<HeaderComponentProps> = ({
  title,
  view,
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    // <SafeAreaProvider>
    <HeaderRNE
      containerStyle={{ height: "10%" }}
      backgroundColor={"#6366f1"}
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: () => navigation.replace("Home"),
      }}
      rightComponent={
        // <View style={styles.headerRight}>
        <>
          <ProfileBottomSheet
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            navigation={navigation}
          />
          <Avatar
            size={32}
            rounded
            // source={l.image_url ? { uri: l.image_url } : {}}
            source={{ uri: mockAvatar.image_url }}
            onPress={() => setIsVisible(!isVisible)}
          />
        </>
        // </View>
      }
      centerComponent={{ text: title, style: styles.heading }}
    />
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6366f1",
    // marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MainHeader;
