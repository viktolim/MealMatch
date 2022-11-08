import React, { useRef, useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Easing,
  FlatList,
  Button,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Lottie from "lottie-react-native";
import Swiper from "react-native-deck-swiper";
import MealsContext from "../context/MealsContext";
import LoadingScreen from "./LoadingSreen";
import { navigate } from "../navigationRef";

const { height, width } = Dimensions.get("screen");

const data = new Array(18).fill(null);

const MatchScreen = () => {
  const ref = useRef(new Animated.Value(0.3));
  const [start, setStart] = useState(false);
  const [swipingLeft, setSwipingLeft] = useState(null);
  const refi = useRef(null);
  const { putLikes, meals } = useContext(MealsContext);

  useEffect(() => {
    meals && start
      ? Animated.timing(ref.current, {
          toValue: 1,
          duration: 11000,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start()
      : null;
  });
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 2500);
  });
  console.log(Boolean(meals), start);
  return meals && start ? (
    <>
      <Swiper
        ref={refi}
        cards={meals}
        containerStyle={{
          alignSelf: "center",
          justifyContent: "center",
        }}
        cardStyle={{
          alignSelf: "center",
          justifyContent: "center",
        }}
        renderCard={(card, index) => {
          return (
            <View
              key={index}
              style={[
                {
                  height: height * 0.6,
                  width: width * 0.8,
                  backgroundColor: `rgba(${180 * (index + 1)}, ${
                    14 * (index + 1)
                  }, ${3 * index + 1}, ${2 * (index + 1)})`,
                  alignSelf: "center",
                  borderRadius: 40,
                  marginHorizontal: (height * 0.2) / 4,
                  bottom: 50,
                },
                styles.shadow,
              ]}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 35 }}
                source={{
                  uri: card.display.images[0],
                }}
              />
            </View>
          );
        }}
        onSwiping={(x) => {
          if (x < -50 && x > -width + 200) {
            setSwipingLeft(true);
          } else if (x > 50 && x < width - 200) {
            setSwipingLeft(false);
          } else {
            setSwipingLeft(null);
          }
        }}
        onSwipedAll={() => {
          navigate("MealsResults");
        }}
        onSwipedLeft={(i) => {
          setSwipingLeft(null);
        }}
        onSwipedRight={(i) => {
          putLikes(i);
          setSwipingLeft(null);
        }}
        cardIndex={0}
        backgroundColor={"white"}
        stackSize={5}
      ></Swiper>
      <Lottie
        style={{
          height: height * 0.13,
          width: height * 0.13,
          alignSelf: "center",
          position: "absolute",
          top: height * 0.32,
        }}
        progress={ref.current}
        resizeMode="cover"
        source={require("../images/timer.json")}
      />
      <View
        style={{
          alignItems: "flex-end",
          position: "absolute",
          bottom: 40,
          flexDirection: "row",

          width: "100%",
        }}
      >
        {[require("../images/cancel.png"), require("../images/heart.png")].map(
          (req, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                refi.current.setCardIndex(refi.current.props.cardIndex + 1);
              }}
              style={[
                {
                  height: 90,
                  width: 90,
                  borderRadius: 200,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 50,
                  shadowColor: "#000",

                  shadowOpacity: 0.01,
                  shadowRadius: 2.62,

                  elevation: 4,
                  flex: 1,
                },
              ]}
            >
              <Image style={{ width: "50%", height: "50%" }} source={req} />
            </TouchableOpacity>
          )
        )}
      </View>

      {swipingLeft == null ? null : (
        <View style={{ alignItems: swipingLeft ? null : "flex-end" }}>
          <Text
            style={{
              borderWidth: 5,
              borderColor: swipingLeft ? "red" : "green",
              borderRadius: 6,
              padding: 5,
              width: 150,
              textAlign: "center",
              fontWeight: "bold",
              transform: [{ rotate: swipingLeft ? "-40deg" : "40deg" }],
              fontSize: 40,
              borderRadius: 15,
              top: 60,
            }}
          >
            {swipingLeft ? "NO" : "YES"}
          </Text>
        </View>
      )}
    </>
  ) : (
    <LoadingScreen isLoading={false} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
export default MatchScreen;
