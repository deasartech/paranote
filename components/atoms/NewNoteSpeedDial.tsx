import React, { FunctionComponent } from "react";
import { SpeedDial } from "@rneui/themed";

interface IMyProps {
  navigation: any;
}

const NewNoteSpeedDial: FunctionComponent<IMyProps> = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <SpeedDial
      isOpen={open}
      icon={{ name: "mic", color: "#fff" }}
      openIcon={{ name: "close", color: "#fff" }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      <SpeedDial.Action
        icon={{ name: "add", color: "#fff" }}
        title="New Note"
        onPress={() => navigation.navigate("PostNote")}
      />
      <SpeedDial.Action
        icon={{ name: "delete", color: "#fff" }}
        title="Delete"
        onPress={() => console.log("Delete Something")}
      />
    </SpeedDial>
  );
};

export default NewNoteSpeedDial;
