import { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import UserContext from "../context/UserContext";
const MainButton = ({
  children,
  pressed,
  color = "white",
  titleColor = "black",
  height = 50,
  getInfo = false,
  notPressable = false,
  flex = false,
}) => {
  const { width, height: size } = Dimensions.get("window");
  const translateScale = new Animated.Value(0);
  const opacity = new Animated.Value(1);
  const userContext = useContext(UserContext);
  // const animation = () => {
  //   Animated.timing(translateScale, {
  //     toValue: -size,
  //     duration: 1800,
  //     useNativeDriver: true,
  //   }).start();

  //   Animated.timing(opacity, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  return (
    <Animated.View style={{ height, marginBottom: 8, flex: Number(flex) }}>
      <TouchableOpacity
        disabled={notPressable}
        style={[styles.container, { backgroundColor: color }]}
        onPress={() => {
          getInfo ? pressed(userContext.getUser()) : pressed();
        }}
      >
        <Text style={[styles.text, { color: titleColor }]}>{children}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
export default MainButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text: {
    fontWeight: "bold",
  },
});
