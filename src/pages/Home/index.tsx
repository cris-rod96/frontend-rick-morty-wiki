import React, { ChangeEvent, useEffect } from "react";
import { characters } from "../../api/characters";
import { CharacterType } from "../../types/index.types";
import { CardCharacter, Filters } from "../../components";

export const HomePage: React.FC<{}> = () => {
  const [data, setData] = React.useState<CharacterType[]>([]);

  const filterByName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    characters.getByName(value).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    characters
      .getAll()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="py-10">
      <Filters cant={data.length} filterByName={filterByName} />
      <div className="flex flex-wrap justify-evenly gap-5">
        {data.map((character) => (
          <CardCharacter
            id={character.id}
            name={character.name}
            gender={character.gender}
            status={character.status}
            image={character.image}
            location={character.location}
            origin={character.origin}
          />
        ))}
      </div>
    </div>
  );
};
