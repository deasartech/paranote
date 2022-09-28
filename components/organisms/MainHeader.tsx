import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

type HeaderComponentProps = {
  title: string;
  view?: string;
  navigation: any;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const MainHeader: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  const playgroundNavigate = () => {
    Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
  };

  return (
    // <SafeAreaProvider>
    <HeaderRNE
      backgroundColor={"#6366f1"}
      leftComponent={{
        icon: "menu",
        color: "#fff",
      }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity
            // style={{ marginLeft: 10 }}
            onPress={() => props.navigation.replace("Profile")}
          >
            <Icon type="antdesign" name="profile" color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: "paranote", style: styles.heading }}
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
