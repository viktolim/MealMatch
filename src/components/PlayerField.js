import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { getAvatarImage } from "../images/components/getAvatarImages";
import PlayersContext from "../context/PlayersContext";
import { navigate } from "../navigationRef";
const { height, width } = Dimensions.get("screen");

const PlayerField = ({
  isChecked,
  isSelected,
  index,
  onPress,
  onPressDelete,
}) => {
  const { players, setEditPlayer } = useContext(PlayersContext);
  console.log(players[0].image);
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={[
        styles.selected,
        { backgroundColor: isSelected ? "#DEF5E5" : null },
      ]}
    >
      <View style={styles.field}>
        <TouchableOpacity
          onPress={({ nativeEvent }) => {
            setEditPlayer({ ...{ index }, name: players[index].name });
            navigate("CreateUsersScreen");
          }}
          style={{ justifyContent: "center" }}
        >
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{ uri: getAvatarImage(players[index].image).data }}
        />

        <Text style={styles.text}>{players[index].name}</Text>
        {isChecked ? (
          <AntDesign
            style={{ top: 25, flex: 1, left: 35 }}
            name="checkcircle"
            size={30}
            color="green"
          />
        ) : (
          <TouchableOpacity
            onPress={() => onPressDelete(index)}
            style={{ top: 25, flex: 1, left: 35 }}
          >
            <AntDesign name="minuscircle" size={30} color="#FF6464" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 15,
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: "#DEF5E5",
  },

  text: { fontSize: 25, fontWeight: "bold", padding: 25, flex: 1 },
  selected: {
    margin: 5,
    marginHorizontal: 15,
    paddingLeft: 5,
    borderRadius: 25,
  },
});
export default PlayerField;
