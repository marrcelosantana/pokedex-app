import { ReactNode, createContext, useState } from "react";
import {
  storageFavoritesCreate,
  storageFavoritesGetAll,
} from "@storage/storageFavorite";

interface PokeContextType {
  favorites: string[];
  isFavorite: boolean;
  loadFavorites: () => void;
  addToFavorites: (url: string) => void;
}

interface PokeProviderProps {
  children: ReactNode;
}

export const PokeContext = createContext({} as PokeContextType);

export function PokeProvider({ children }: PokeProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  async function loadFavorites() {
    try {
      const data = await storageFavoritesGetAll();
      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addToFavorites(url: string) {
    try {
      await storageFavoritesCreate(url);
      loadFavorites();
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PokeContext.Provider
      value={{ favorites, isFavorite, loadFavorites, addToFavorites }}
    >
      {children}
    </PokeContext.Provider>
  );
}
