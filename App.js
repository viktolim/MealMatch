import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/screens/MainScreen";
import CreateUser from "./src/screens/CreateUserScreen";
import CreateUsersScreen from "./src/screens/CreateUsersSreen";
import LogInScreen from "./src/screens/LogInScreen";
import { AuthProvider } from "./src/context/AuthContext";
import { navigate, setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Ionicons } from "@expo/vector-icons";
import AddUsersScreen from "./src/screens/AddUsersSreen";
import { PlayersProvider } from "./src/context/PlayersContext";
import MatchScreen from "./src/screens/MatchScreen";
import MealsContext, { MealsProvider } from "./src/context/MealsContext";
import MealsResults from "./src/screens/MealsResults";

const navigator = createStackNavigator(
  {
    ResolveAuthScreen: ResolveAuthScreen,
    MainScreen: MainScreen,
    AddUsersScreen: AddUsersScreen,
    mainFlow: createSwitchNavigator({
      CreateUsersScreen: {
        screen: CreateUsersScreen,
      },
    }),
    MatchScreen: {
      screen: () => <MatchScreen />,
      navigationOptions: {
        headerShown: false,
      },
    },
    MealsResults: MealsResults,
  },
  {
    defaultNavigationOptions: {
      headerLeft: () => null,
      title: "",
      headerStyle: {
        shadowColor: "transparent",
        elevation: 0,
      },
    },
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <AuthProvider>
      <PlayersProvider>
        <MealsProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </MealsProvider>
      </PlayersProvider>
    </AuthProvider>
  );
};
