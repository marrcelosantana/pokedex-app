import { ReactNode, createContext, useState } from "react";
import { useToast } from "native-base";
import {
  storageFavoritesCreate,
  storageFavoritesGetAll,
} from "@storage/storageFavorite";

interface FavoritesContextType {
  favorites: string[];
  isFavorite: boolean;
  loadFavorites: (userId: string) => Promise<void>;
  addToFavorites: (url: string, userId: string) => Promise<void>;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext({} as FavoritesContextType);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toast = useToast();

  async function loadFavorites(userId: string) {
    try {
      const data = await storageFavoritesGetAll(userId);
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

  async function addToFavorites(url: string, userId: string) {
    try {
      await storageFavoritesCreate(url, userId);
      await loadFavorites(userId);
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
