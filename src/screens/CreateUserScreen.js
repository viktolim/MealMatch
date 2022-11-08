import React, { useRef, useState, createRef } from "react";
import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import MainButton from "../components/MainButton";
import { ScrollView } from "react-native-gesture-handler";
import {
  avatars,
  getAvatarImage,
  getAvatarBodyImage,
} from "../images/components/getAvatarImages";

export default function CreateUser() {
  const bs = createRef();
  const fall = new Animated.Value(0);
  const [isOpen, setIsOpen] = useState([1]);
  const ref = useRef(null);
  const renderInner = () => (
    <View style={styles.buttonBox}>
      <Text style={styles.text}>Add player</Text>

      <ScrollView
        ref={ref}
        style={{ paddingLeft: 0 }}
        horizontal={true}
        contentOffset={{ x: 50, y: 0 }}
        disableIntervalMomentum={true}
        fadingEdgeLength={150}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {avatars.map((img, index) => {
          console.log(`../images/IMG-${img}.png`);
          return (
            <View key={index} style={styles.box}>
              <Image
                key={index}
                style={styles.stretch}
                source={{ uri: getAvatarImage(img).data }}
              />
            </View>
          );
        })}
      </ScrollView>

      <MainButton title={"bottom"} pressed={() => bs.current.snapTo([2])} />
      <MainButton title={" drop down"} pressed={() => bs.current.snapTo([0])} />
    </View>
  );
  const renderHeader = () => <View style={styles.buttonBox}></View>;
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={["0%", "70%", "8%"]}
        renderContent={renderInner}
        // renderHeader={renderHeader}
        initialSnap={isOpen}
        enabledGestureInteraction={false}
      ></BottomSheet>
      <Animated.View
        style={{
          margin: 200,
          opacity: Animated.add(0.3, Animated.multiply(fall, 0.8)),
        }}
      >
        <Text>{isOpen}</Text>
        <Text>bardfrdtbgf ae</Text>
        <Text>batrdfbfgaetdgbhaetdfhbgaertdhberdf</Text>
        <MainButton
          title={"open"}
          pressed={() => {
            bs.current.snapTo([1]);
            fall.setValue(1);
          }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FFF8",
  },
  buttonBox: {
    backgroundColor: "white",
    height: "97%",
    margin: 8,
    borderRadius: 25,
  },
  mainSreen: {
    marginTop: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 15,
  },
  box: {
    borderRadius: 25,
    height: 200,
    width: 200,
    backgroundColor: "#F5EDDC",
    alignSelf: "center",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  stretch: {
    borderRadius: 25,
    width: "100%",
    height: "100%",
  },
});
