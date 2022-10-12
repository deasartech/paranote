import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { fetchCurrentUser } from "../services/api";
import { MainHeader } from "../components/organisms/index";
import { ButtonPrimary, ReferenceListItem } from "../components/atoms/index";
import { InputsFormPost } from "../components/molecules/index";
import { IInput, IDropdown } from "../types/types";

interface IMyProps {
  navigation: any;
}

interface INoteInfo {
  title: string;
  topic: string;
  references: string[];
}

const PostNoteScreen: FunctionComponent<IMyProps> = ({
  navigation,
}: IMyProps) => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const arr: string[] = [];
  const [refs, setRefs] = useState(arr);

  useEffect(() => {
    fetchCurrentUser().then((res) => {
      const [user, userId]: any = res;
      console.log(user, "current user res");
      setEmail(user.email);
    });
  }, []);

  useEffect(() => {
    console.log(topic, "topic");
  }, [topic, refs]);

  const inputs: IInput[] = [
    {
      placeholder: "title",
      value: title,
      func: setTitle,
    },
  ];

  // add to refs array
  const handleAddRefs = (el: string) => {
    if (refs.length < 3 && el.length > 0) {
      setRefs((current) => [...current, el]);
    }
  };

  // remove from refs array
  const handleRemoveRefs = (el: string) => {
    setRefs((current) =>
      current.filter((element) => {
        return element !== el;
      })
    );
  };

  // build note data
  const handleNoteInfo = () => {
    const noteInfo: INoteInfo = {
      title: title,
      topic: topic,
      references: refs,
    };
    navigation.navigate("RecordNote", {
      noteInfo: noteInfo,
    });
  };

  const references: IInput = {
    placeholder: "enter references",
    value: refs,
    func: handleAddRefs,
  };

  const items: IDropdown[] = [
    {
      label: "Comedy",
      value: "comedy",
    },
    {
      label: "Business",
      value: "business",
    },
  ];

  return (
    <>
      <MainHeader title={"post note"} navigation={navigation} />
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Post new note</Text> */}
        <View style={styles.top}>
          <InputsFormPost
            inputs={inputs}
            items={items}
            value={topic}
            func={setTopic}
            references={references}
            propertyToEdit={"references"}
          />
          <View style={styles.refs}>
            {refs?.map((ref, index) => {
              return (
                <ReferenceListItem
                  key={index}
                  func={handleRemoveRefs}
                  refItem={ref}
                />
              );
            })}
          </View>
          <View style={styles.buttonContainer}>
            <ButtonPrimary title={"Record Note"} func={handleNoteInfo} />
          </View>
        </View>
      </View>
    </>
  );
};

export default PostNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
    marginHorizontal: "auto",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  refs: {
    height: "40%",
    width: "100%",
    paddingHorizontal: 15,
    maxWidth: 500,
    paddingTop: 20,
    marginHorizontal: "auto",
    alignItems: "center",
  },
  top: {
    height: "80%",
  },
  bottom: {
    height: "20%",
  },
});
