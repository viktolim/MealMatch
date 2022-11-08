import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import MainButton from "../components/MainButton";
import AvatarField from "../components/AvatarField";
import PlayerContext from "../context/PlayersContext";
import { navigate } from "../navigationRef";
import PlayerField from "../components/PlayerField";

const { height, width } = Dimensions.get("screen");

const AddUsersScreen = () => {
  const [select, setSelect] = useState(0);
  const { addPlayer, players, deletePlayer } = useContext(PlayerContext);

  useEffect(() => {
    setSelect(players.findIndex(({ checked, index }) => checked == false));
  }, [players.length]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.field}>
        <AvatarField />
      </View>

      <View style={styles.userList}>
        {players.length > 2 && select >= 0 ? (
          <MainButton
            pressed={() => {
              console.log("pressed");
              navigate("MatchScreen");
            }}
          >
            Play
          </MainButton>
        ) : null}
        <FlatList
          contentContainerStyle={{ paddingBottom: 200 }}
          data={players}
          renderItem={({ item, index }) => {
            return item.name ? (
              <PlayerField
                isChecked={item.checked}
                name={item.name}
                isSelected={select == index ? true : false}
                index={index}
                onPressDelete={deletePlayer}
                onPress={setSelect}
              />
            ) : (
              <View style={{ marginVertical: 10 }}>
                <MainButton pressed={() => navigate("CreateUsersScreen")}>
                  {"Add player"}
                </MainButton>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  field: {
    height: height * 0.35,
    backgroundColor: "#DEF5E5",
    paddingVertical: 20,
  },
  userList: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    bottom: 20,
    paddingTop: 20,
    height: height * 0.7,
    width: width * 1.02,
    alignSelf: "center",
    backgroundColor: "white",
  },
});
export default AddUsersScreen;
