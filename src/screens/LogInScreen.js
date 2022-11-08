import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreenImage from "../images/MainScreenImage";
import MainButton from "../components/MainButton";
import TitleField from "../components/TitleField";
const LogInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainScreenImage />
      <TitleField> Find your Meal Match</TitleField>

      <View style={{ height: 50, marginBottom: 8 }}>
        <MainButton
          color="black"
          titleColor="white"
          pressed={() => {
            console.log("pressed");
            navigation.navigate("AddUsersScreen");
          }}
        >
          Log in
        </MainButton>
      </View>
      <View style={{ height: 50 }}>
        <MainButton
          color="white"
          titleColor="black"
          pressed={() => {
            console.log("pressed");
            navigation.navigate("AddUsersScreen");
          }}
        >
          Sign up
        </MainButton>
      </View>
    </View>
  );
};

LogInScreen.navigationOptions = () => {
  return {
    title: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default LogInScreen;
