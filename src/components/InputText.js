import { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Keyboard, Touchable } from "react-native";
import { TextInput } from "react-native-element-textinput";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

import UserContext from "../context/UserContext";

const InputText = ({ children, putError, putValue, flex = 0 }) => {
  const passwordIcons = ["eye", "eye-slash"];
  const [error, setError] = useState(putError);
  const [value, setValue] = useState(putValue);
  const { putUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    setError(putError);
  }, [putError]);
  return (
    <View
      style={[
        styles.container,
        {
          flex: flex,
        },
      ]}
    >
      <TextInput
        value={value}
        style={[styles.input, { shadowColor: error ? "red" : "black" }]}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        textErrorStyle={styles.textErrorStyle}
        label={children}
        secureTextEntry={children === "Password" && showPassword ? true : false}
        placeholderTextColor="gray"
        focusColor={error ? "red" : "black"}
        onChangeText={(text) => {
          putUser({ title: children, info: text });
          setValue(text);
        }}
        renderRightIcon={() =>
          children === "Password" ? (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome
                size={22}
                name={passwordIcons[Number(showPassword)]}
              ></FontAwesome>
            </TouchableOpacity>
          ) : null
        }
        textError={error}
      />
    </View>
  );
};
export default InputText;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 15,
    position: "absolute",
    top: -10,
    backgroundColor: "white",
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 15 },
});
