import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import MainScreenImage from "../images/MainScreenImage";
import MainButton from "../components/MainButton";
import TitleField from "../components/TitleField";
import SignUpSreen from "./SignUpScreen";
import AuthContext from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import LoadingScreen from "./LoadingSreen";

const MainScreen = ({ navigation }) => {
  const data = ["SIGNUP", "LOGIN"];

  const [SignUp, setSignUp] = useState({ position: 0, title: null });

  const { state, setLoading } = useContext(AuthContext);

  return (
    <UserProvider>
      <View style={[styles.container]}>
        <MainScreenImage />
      </View>

      <View style={{ flex: 0.5 }}>
        {SignUp.position ? (
          <SignUpSreen position={SignUp.position} title={SignUp.title} />
        ) : (
          <>
            <TitleField> Find your Meal Match</TitleField>

            {data.map((data, index) => {
              return (
                <MainButton
                  key={index}
                  color={index % 2 ? "black" : "white"}
                  titleColor={index % 2 ? "white" : "black"}
                  pressed={() => setSignUp({ position: index ? 30 : 70 })}
                >
                  {data}
                </MainButton>
              );
            })}
          </>
        )}
      </View>
      {state.isLoading ? <LoadingScreen /> : null}
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MainScreen;
