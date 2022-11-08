import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Animated, Dimensions, Keyboard } from "react-native";
import ImageField from "../components/ImageField";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

import {
  avatars,
  getAvatarBodyImage,
} from "../images/components/getAvatarImages";

const CARD_WIDTH = width - 200 + 50;

const images = [null, ...avatars, null];

const CreateUsersScreen = () => {
  const x = new Animated.Value(0);

  const scrollX = useRef(new Animated.Value(0));
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
    useNativeDriver: true,
  });
  return (
    <>
      <View style={styles.container}>
        {images.map((data, index) => {
          const translateX = x.interpolate({
            inputRange: [
              (index - 2) * CARD_WIDTH,
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
            ],
            outputRange: [width, 0, -width],
            extrapolate: "clamp",
          });

          return (
            <Animated.Image
              key={index}
              style={[
                styles.animatedImage,
                {
                  transform: [{ translateX }],
                },
              ]}
              source={{ uri: getAvatarBodyImage(data).data }}
            />
          );
        })}

        <View style={styles.imageContainer}>
          <LinearGradient
            colors={["transparent", "white"]}
            style={[styles.images]}
          />
          <Animated.FlatList
            scrollEventThrottle={16}
            data={images}
            horizontal
            contentContainerStyle={{
              alignItems: "flex-start",
            }}
            keyExtractor={(_, index) => index}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            snapToInterval={CARD_WIDTH}
            decelerationRate={0}
            {...{ onScroll }}
            renderItem={({ item, index }) => {
              return (
                <>
                  <ImageField {...{ x, index, item }} title="" />
                </>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 2,
  },
  animatedImage: {
    position: "absolute",
    bottom: 0,
    height: height * 0.5,
    width: width,
  },
  images: {
    bottom: 0,
    width,
    position: "absolute",
    height: 600,
  },
});

export default CreateUsersScreen;
