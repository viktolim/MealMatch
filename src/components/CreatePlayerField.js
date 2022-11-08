import { useEffect, useRef, useState, createRef, useContext } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import MainButton from "./MainButton";
import { FontAwesome } from "@expo/vector-icons";
import PlayersContext from "../context/PlayersContext";
import { navigate } from "../navigationRef";

const CreatePlayerField = ({ index }) => {
  const { addPlayer, editPlayer, renamePlayer } = useContext(PlayersContext);
  const [showInput, setShowInput] = useState(false);
  console.log(editPlayer);
  const [name, setName] = useState(editPlayer ? editPlayer.name : "");

  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View
        key={index}
        style={{
          marginVertical: 25,
        }}
      >
        {showInput ? (
          <>
            <TextInput
              autoFocus={showInput}
              style={styles.textInput}
              contextMenuHidden={true}
              textAlign={"center"}
              onChangeText={setName}
            />
          </>
        ) : null}

        <MainButton
          notPressable={name.length || !showInput ? false : true}
          color={"white"} //`rgb(${item * 2}, ${item * 0.25}, ${item * 0.5})`
          titleColor="black"
          pressed={() => {
            showInput
              ? (editPlayer
                  ? renamePlayer(name, index)
                  : addPlayer(name, index),
                navigate("AddUsersScreen"))
              : setShowInput(true);
          }}
        >
          {editPlayer ? "Edit" : "Add"}
        </MainButton>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    height: 50,

    margin: 12,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  touch: {
    position: "absolute",
    borderWidth: 2,
    width: 50,
    borderRadius: 200,
    alignSelf: "center",
    borderColor: "white",
  },
  name: {
    position: "absolute",
    color: "black",
    bottom: 200,
    fontWeight: "bold",
    fontSize: 45,
    alignSelf: "center",
  },
});
export default CreatePlayerField;
