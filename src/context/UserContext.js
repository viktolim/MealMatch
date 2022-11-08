import React, { useContext, useState, useReducer } from "react";
import AuthContext from "./AuthContext";
const UserContext = React.createContext();

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "Username":
      return { ...state, username: action.value };
    case "Password":
      return { ...state, password: action.value };
    case "First Name":
      return { ...state, firstName: action.value };
    case "Last Name":
      return { ...state, lastName: action.value };
    case "Email Address":
      return { ...state, email: action.value };
  }
};

export const UserProvider = ({ children }) => {
  const user = {
    username: "-",
    password: "-",
    email: "-",
    firstName: "-",
    lastName: "-",
  };

  const { state: addError } = useContext(AuthContext);
  console.log(addError);

  const [state, dispatch] = useReducer(reducer, user);

  const putUser = ({ title, info }) => {
    dispatch({ type: title, value: info });
  };

  const getUser = () => {
    return state;
  };
  const isButtonTouchable = (screen) => {
    console.log(screen);
    const signInLogic =
      state.username != "-" &&
      state.password != "-" &&
      state.password.length >= 8 &&
      state.username.length > 0;
    if (screen == "LOGIN") {
      return signInLogic;
    } else {
      return (
        signInLogic &&
        (state.firstName != "-" &&
          state.email != "-" &&
          state.email.length > 0 &&
          state.lastName.length > 0,
        state.lastName != "-" && state.firstName.length > 0)
      );
    }
  };

  return (
    <UserContext.Provider value={{ putUser, getUser, isButtonTouchable }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
