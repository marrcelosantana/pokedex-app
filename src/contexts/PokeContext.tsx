import { ReactNode, createContext, useEffect, useState } from "react";

interface PokeContextType {
  favorites: Favorite[];
  addToFavorites: (url: string) => void;
}

interface PokeProviderProps {
  children: ReactNode;
}

type Favorite = {
  pokemonUrl: string;
  isFavorite: boolean;
};

export const PokeContext = createContext({} as PokeContextType);

export function PokeProvider({ children }: PokeProviderProps) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  function addToFavorites(url: string) {
    const array: Favorite[] = [];

    favorites.filter((item) => {
      if (item?.pokemonUrl === url) {
        return;
      }
    });

    const data: Favorite = {
      pokemonUrl: url,
      isFavorite: true,
    };

    array.push(data);

    setFavorites([...array, data]);
  }

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <PokeContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </PokeContext.Provider>
  );
}
