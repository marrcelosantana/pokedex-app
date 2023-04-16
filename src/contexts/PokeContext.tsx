import { ReactNode, createContext, useState } from "react";
import {
  storageFavoritesCreate,
  storageFavoritesGetAll,
} from "@storage/storageFavorite";

interface PokeContextType {
  favorites: string[];
  loadFavorites: () => void;
  handleFavorite: (url: string) => void;
}

interface PokeProviderProps {
  children: ReactNode;
}

export const PokeContext = createContext({} as PokeContextType);

export function PokeProvider({ children }: PokeProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  async function loadFavorites() {
    try {
      const data = await storageFavoritesGetAll();
      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFavorite(url: string) {
    try {
      await storageFavoritesCreate(url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PokeContext.Provider value={{ favorites, loadFavorites, handleFavorite }}>
      {children}
    </PokeContext.Provider>
  );
}
