import { ReactNode, createContext, useState } from "react";
import { useToast } from "native-base";
import {
  storageFavoritesCreate,
  storageFavoritesGetAll,
} from "@storage/storageFavorite";

interface FavoritesContextType {
  favorites: string[];
  isFavorite: boolean;
  loadFavorites: () => void;
  addToFavorites: (url: string) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext({} as FavoritesContextType);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toast = useToast();

  async function loadFavorites() {
    try {
      const data = await storageFavoritesGetAll();
      setFavorites(data);
    } catch (error) {
      toast.show({
        title: "Error loading data!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  async function addToFavorites(url: string) {
    try {
      await storageFavoritesCreate(url);
      await loadFavorites();
      setIsFavorite(!isFavorite);
    } catch (error) {
      toast.show({
        title: "Error! Try again.",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
    }
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, loadFavorites, addToFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
