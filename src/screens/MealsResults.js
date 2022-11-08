import { useContext, useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";

import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import MealsContext from "../context/MealsContext";
const { width, height } = Dimensions.get("screen");

export default MealsResults = () => {
  const [pressed, setPressed] = useState(0);
  const { meals } = useContext(MealsContext);
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        {["Liked", "Didn't like", "By ratings"].map((name, index) => (
          <MainButton
            pressed={(val) => setPressed(index)}
            key={index}
            flex={true}
          >
            {name}
          </MainButton>
        ))}
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 150 }}
        data={meals}
        renderItem={(value) => {
          return (
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image
                style={{
                  height: width / 3,
                  width: width / 3,
                  borderRadius: 5,
                  padding: 10,
                }}
                source={{
                  uri: "https://static.diabetesfoodhub.org/system/thumbs/system/images/articles/by-the-plate-main-image_SFW_3368519878.jpg",
                }}
              />
              <TitleText color="black">fcred</TitleText>
            </View>
          );
        }}
      />
    </View>
  );
};
