import { ReactNode, createContext, useEffect, useState } from "react";

interface PokeContextType {
  favorites: Favorite[];
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

  useEffect(() => {}, []);

  return (
    <PokeContext.Provider value={{ favorites }}>
      {children}
    </PokeContext.Provider>
  );
}
