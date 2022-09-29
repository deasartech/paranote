import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { fetchSignOutUser } from "../../services/api";

type OverlayComponentProps = {
  modal: boolean;
  setModal: any;
  navigation: any;
};

const OverlayComponent: React.FunctionComponent<OverlayComponentProps> = ({
  modal,
  setModal,
  navigation,
}) => {
  const toggleOverlay = () => {
    setModal(!modal);
  };

  const signOut = async () => {
    await fetchSignOutUser();
    navigation.replace("SignIn");
  };
  return (
    <View>
      <Overlay
        isVisible={modal}
        onBackdropPress={toggleOverlay}
        overlayStyle={{ borderRadius: 20 }}
      >
        <Text style={styles.textPrimary}>Hold on!</Text>
        <Text style={styles.textSecondary}>
          Are you sure you would like to sign out?
        </Text>
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonColor}
          icon={
            <Icon
              name="exit"
              type="ionicon"
              color="white"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Sign out"
          onPress={() => signOut()}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 33,
    marginTop: 5,
  },
  buttonColor: {
    borderRadius: 33,
    backgroundColor: "#f43f5e",
    padding: 5,
    width: "100%",
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
});

export default OverlayComponent;
