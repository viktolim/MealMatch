import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

import { getAvatarImage } from "../images/components/getAvatarImages";
const { height, width } = Dimensions.get("screen");

const AvatarField = () => {
  return (
    <View style={styles.field}>
      <Image style={styles.image} source={{ uri: getAvatarImage(2).data }} />
      <Text style={styles.text}>Viktorija</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    marginTop: 30,
    width: 150,
    height: 150,
    borderRadius: 100,
    paddingVertical: 10,
    backgroundColor: "#EAEAEA",
    borderWidth: 3,
    borderColor: "white",
  },
  text: { fontSize: 50, color: "white", fontWeight: "bold" },
  field: { justifyContent: "center", alignItems: "center" },
});
export default AvatarField;
