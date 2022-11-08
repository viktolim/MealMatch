import React, { useContext, useState } from "react";
import AuthenticationApi from "../api/components/AuthenticationApi";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, changeState] = useState({
    isSignedIn: false,
    errorMessage: null,
    isLoading: false,
  });

  const setLoading = () => {
    Keyboard.dismiss();
    changeState(() => {
      return { ...state, isLoading: !state.isLoading };
    });
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("1111111111111111", token);
      if (token !== null) {
        changeState({ ...state, isSignedIn: true });
        navigate("AddUsersScreen");
      }
    } catch (error) {
      return null;
    }
  };
  const SignUp = async (info, { endpoint }) => {
    console.log(AuthenticationApi.getUri() + `${JSON.stringify(endpoint)}`);
    try {
      const { data } = await AuthenticationApi.post(endpoint, info);
      await AsyncStorage.setItem("token", JSON.stringify(data.token));
      console.log(data, data.token);

      changeState((val) => {
        console.log({ ...val, isSignedIn: true, isLoading: false });
        return { ...val, isSignedIn: true, isLoading: false };
      });
      navigate("AddUsersScreen");
    } catch (err) {
      console.log(err);
      changeState((val) => {
        return {
          ...state,
          errorMessage:
            endpoint == "signup"
              ? "this ussername exist, change it"
              : "sorry, we can't find an account with this ",
          isLoading: false,
        };
      });
    }
  };

  return (
    <AuthContext.Provider value={{ state, SignUp, setLoading, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export { AuthProvider };
