import React from "react";
import {
  CardCharacter,
  Filters,
  LoadingComponent,
  PaginatedComponent,
} from "../../components";
import { useHome } from "../../hooks/home";

export const HomePage: React.FC<{}> = () => {
  const {
    data,
    fetchCharacters,
    dataPaginated,
    goNextPage,
    goPrevPage,
    filterByName,
    checkFavorite,
    removeFavorite,
    getAllFavorites,
    isFavorite,
  } = useHome();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  React.useEffect(() => {
    fetchCharacters();
    getAllFavorites();
  }, []);

  return loading ? (
    <LoadingComponent loading={loading} />
  ) : (
    <div className="py-10">
      <div className="w-full h-full flex justify-between items-center py-5 border-b">
        <PaginatedComponent
          nextPage={dataPaginated.nextPage}
          prevPage={dataPaginated.prevPage}
          numPages={dataPaginated.numPages}
          currentPage={dataPaginated.currentPage}
          goNextPage={goNextPage}
          goPrevPage={goPrevPage}
        />
        <Filters cant={data.length} filterByName={filterByName} />
      </div>
      <div className="flex flex-wrap justify-evenly gap-5">
        {data.map((character) => (
          <CardCharacter
            key={character.id}
            id={character.id}
            name={character.name}
            gender={character.gender}
            status={character.status}
            image={character.image}
            location={character.location}
            origin={character.origin}
            checkFavorite={checkFavorite}
            isFavorite={isFavorite}
            removeFavorite={removeFavorite}
          />
        ))}
      </div>
    </div>
  );
};
