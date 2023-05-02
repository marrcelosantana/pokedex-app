import { FavoritesContext } from "@contexts/FavoritesContext";
import { useContext } from "react";

export function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}
