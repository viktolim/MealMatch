import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TitleField = ({ children, padding = 20, color = "black" }) => {
  return <Text style={[styles.text, { padding, color }]}>{children}</Text>;
};
export default TitleField;

const styles = StyleSheet.create({
  text: {
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
});
