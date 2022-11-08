import { useEffect } from "react";
import { StyleSheet, View, Image, Animated, Dimensions } from "react-native";
import { useHeaderHeight } from "react-navigation-stack";

const MainScreenImage = () => {
  return (
    <Animated.View style={[styles.box]}>
      <Image style={styles.image} source={require("./mainScreen.png")} />
    </Animated.View>
  );
};
export default MainScreenImage;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
