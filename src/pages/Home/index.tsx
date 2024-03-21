import React, { useEffect } from "react";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    characters
      .getAll()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <h1>HomePage</h1>;
};
