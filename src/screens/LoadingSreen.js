import React, { useContext, useState } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Lottie from "lottie-react-native";

const LoadingScreen = ({ isLoading = true }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View
        style={[
          {
            width,
            height,
          },
          styles.loadingScreen,
        ]}
      ></View>
      <Lottie
        source={
          isLoading
            ? require("../images/loading_1.json")
            : require("../images/start.json")
        }
        loop={isLoading ? true : false}
        autoPlay
      />
    </>
  );
};
const styles = StyleSheet.create({
  loadingScreen: {
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.6,
    padding: 100,
  },
});
export default LoadingScreen;
