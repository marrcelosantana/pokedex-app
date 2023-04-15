import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "./storageConfig";

export async function storageFavoriteSave(url: string) {
  try {
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(url));
  } catch (error) {
    throw error;
  }
}

export async function storageFavoriteGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FAVORITE_STORAGE);
    const favorites: string[] = storage ? JSON.parse(storage) : [];
    return favorites;
  } catch (error) {
    throw error;
  }
}

export async function storageFavoriteRemove(url: string) {
  try {
    const storage = await storageFavoriteGetAll();
    const filtered = storage.filter((item) => item !== url);
    const favorites = JSON.stringify(filtered);
    await AsyncStorage.setItem(FAVORITE_STORAGE, favorites);
  } catch (error) {
    throw error;
  }
}
