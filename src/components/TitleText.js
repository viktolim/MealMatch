import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TitleText = ({ children, color = "white" }) => {
  return <Text style={[styles.text, { color }]}>{children}</Text>;
};
export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
  },
});
