import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import MainButton from "../components/MainButton";
import InputText from "../components/InputText";
import TitleField from "../components/TitleField";
import AuthContext, { GetUserInfo } from "../context/AuthContext";
import UserContext from "../context/UserContext";

const data = ["SIGNUP", "LOGIN"];

const SignUpScreen = ({ position }) => {
  const { width, height } = Dimensions.get("window");

  const [positions, setPositions] = useState(position);
  const translation = new Animated.Value(-(height * positions) / 100);

  const { state, SignUp, setLoading } = useContext(AuthContext);
  const { getUser, isButtonTouchable } = useContext(UserContext);

  const User = getUser();
  console.log(User);
  const getName = (data) =>
    data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();

  state.isLoading || state.errorMessage
    ? translation.setValue(-(height * positions) / 100)
    : null;

  Keyboard.addListener("keyboardDidShow", () =>
    positions > 50 ? translation.setValue(-height / 2 + 10) : null
  );

  console.log(positions, translation);
  return (
    <Animated.View
      style={[
        styles.bottomSheet,
        {
          height,
          transform: [{ translateY: translation }],
        },
      ]}
    >
      {positions > 50 ? (
        <>
          <TitleField>{data[0]}</TitleField>
          <View style={{ flexDirection: "row" }}>
            <InputText
              putError={
                User.firstName.trim().length ? null : "Please enter first name"
              }
              flex={1}
            >
              First Name
            </InputText>
            <InputText
              putError={
                User.lastName.trim().length ? null : "Please enter last name"
              }
              flex={1}
            >
              Last Name
            </InputText>
          </View>
          <InputText
            putError={User.email.trim().length ? null : "Please enter an email"}
          >
            Email Address
          </InputText>
        </>
      ) : (
        <>
          <TitleField>Welcome</TitleField>
        </>
      )}
      <InputText
        putError={
          User.username.trim().length ? null : "Please enter a username"
        }
      >
        Username
      </InputText>

      <InputText
        putError={
          User.password == "-"
            ? null
            : User.password.trim().length >= 8
            ? state.errorMessage
              ? `${state.errorMessage} user`
              : null
            : "password must be at least 8 characters"
        }
      >
        Password
      </InputText>
      <MainButton
        notPressable={!isButtonTouchable(data[positions > 50 ? 0 : 1])}
        getInfo={true}
        {...styles.mainButton}
        pressed={async (val) => {
          setLoading();

          await SignUp(val, {
            endpoint:
              positions > 50 ? data[0].toLowerCase() : data[1].toLowerCase(),
          });
        }}
      >
        {getName(data[positions > 50 ? 0 : 1])}
      </MainButton>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#B2B2B2" }}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            setPositions(positions > 50 ? 30 : 70);
          }}
        >
          <Text>{getName(data[positions > 50 ? 1 : 0])}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white",
  },
  mainButton: {
    height: 50,
    color: "black",
    titleColor: "white",
  },
});

export default SignUpScreen;
