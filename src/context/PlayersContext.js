import React, { useEffect, useState } from "react";
import YummlyApi from "../api/components/YummlyApi";

const PlayersContext = React.createContext();

export const PlayersProvider = ({ children }) => {
  const [editPlayer, setEditPlayer] = useState(null);
  const [players, setPlayer] = useState([
    {
      checked: true,
      image: 1,
      name: "Siii",
    },
    {
      checked: true,
      image: 3,
      name: "Siii",
    },
    {
      checked: true,
      name: null,
    },
  ]);
  useEffect(() => {
    console.log("saveeeeeeeeeeeeeeeee");
  }, [players]);

  const addPlayer = async (name, image) => {
    setPlayer((players) => [
      { checked: false, ...{ name, image } },
      ...players,
    ]);
  };
  const renamePlayer = (name, image) => {
    setEditPlayer(null);
    setPlayer((players) =>
      players.map((user, index) => {
        console.log(image);
        return index == editPlayer.index ? { ...user, name, image } : user;
      })
    );
  };
  const deletePlayer = (position) => {
    setPlayer((players) => players.filter((_, index) => index != position));
  };
  return (
    <PlayersContext.Provider
      value={{
        addPlayer,
        deletePlayer,
        players,
        editPlayer,
        setEditPlayer,
        renamePlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersContext;
