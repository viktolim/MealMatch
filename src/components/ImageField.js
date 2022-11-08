import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Animated,
} from "react-native";

import { avatars, getAvatarImage } from "../images/components/getAvatarImages";

import CreatePlayerField from "./CreatePlayerField";
const { width, height } = Dimensions.get("window");
const IMAGE_WIDTH = width - 200;
const CARD_WIDTH = width - IMAGE_WIDTH + 50;
const SPACER_ITEM_SIZE = (width - CARD_WIDTH) / 2;

const ImageField = ({ title, item, index, x }) => {
  const translateY = x.interpolate({
    inputRange: [
      (index - 2) * CARD_WIDTH,
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
    ],
    outputRange: [0, -50, 0],
    extrapolateRight: "clamp",
  });
  return (
    <>
      {item ? (
        <Animated.View
          key={index}
          style={[
            {
              transform: [{ translateY }],
              backgroundColor: `rgb(${item * 2}, ${item * 0.25}, ${
                item * 0.5
              })`,
            },
            styles.imageBox,
          ]}
        >
          <Image
            style={styles.image}
            source={{ uri: getAvatarImage(index).data }}
          />
          {title.length < 10 ? (
            <Text style={styles.textTitle}>{title}</Text>
          ) : (
            <>
              <Text style={styles.textTitle}>{title.substr(0, 9)}</Text>
              <Text style={[styles.textTitle, { top: 60 }]}>
                {title.substr(9, title.length)}
              </Text>
            </>
          )}
          <CreatePlayerField index={index} />
        </Animated.View>
      ) : (
        <View style={{ width: SPACER_ITEM_SIZE }}></View>
      )}
    </>
  );
};
export default ImageField;

const styles = StyleSheet.create({
  imageBox: {
    borderWidth: 10,
    borderColor: "white",
    borderRadius: 100,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    margin: 25,
    marginVertical: "50%",
  },
  textTitle: {
    color: "white",
    fontSize: 50,
    alignSelf: "center",
    position: "absolute",
    top: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});
