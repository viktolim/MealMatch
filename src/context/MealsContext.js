import React, { useEffect, useState } from "react";
import YummlyApi from "../api/components/YummlyApi";
import axios from "axios";
const MealsContext = React.createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(null);
  const like = [];
  useEffect(() => {
    new Promise(async (res, rej) => {
      const { data } = await YummlyApi.get("feeds/list", {
        params: { limit: "15", start: "0" },
      });
      console.log(data);
      res(data);
    })
      .then(({ feed }) => setMeals(feed))
      .catch(() => setMeals(null));
  }, []);
  const putLikes = (meal) => {
    like.push(meal);
  };

  return (
    <MealsContext.Provider value={{ putLikes, meals }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
