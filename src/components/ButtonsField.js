import { StyleSheet, View } from "react-native";
import MainButton from "./MainButton";

const ButtonsField = ({ titleFirst, titleSecond }) => {
  return (
    <View style={styles.buttonsField}>
      <MainButton color="white">{titleFirst}</MainButton>
      <MainButton color="white">{titleSecond}</MainButton>
    </View>
  );
};
export default ButtonsField;

const styles = StyleSheet.create({
  buttonsField: {
    flexDirection: "row",
    borderWidth: 2,
    marginVertical: 10,
  },
});
