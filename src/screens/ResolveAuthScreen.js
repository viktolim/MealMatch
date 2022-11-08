import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import AuthContext from "../context/AuthContext";
import { navigate } from "../navigationRef";
import LoadingScreen from "./LoadingSreen";
const ResolveAuthScreen = () => {
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    navigate("AddUsersScreen");
    getToken();
  }, []);

  return <LoadingScreen />;
};

export default ResolveAuthScreen;
