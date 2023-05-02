import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "./storageConfig";

export async function storageFavoritesGetAll(userId: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${FAVORITE_STORAGE}_user:${userId}`
    );

    const favorites: string[] = storage ? JSON.parse(storage) : [];

    return favorites;
  } catch (error) {
    throw error;
  }
}

export async function storageFavoritesCreate(url: string, userId: string) {
  try {
    const storageFavorites = await storageFavoritesGetAll(userId);

    const urlAlreadyExists = storageFavorites.includes(url);

    if (urlAlreadyExists) {
      storageFavoritesRemove(url, userId);
    }

    const storage = JSON.stringify([...storageFavorites, url]);

    await AsyncStorage.setItem(`${FAVORITE_STORAGE}_user:${userId}`, storage);
  } catch (error) {
    throw error;
  }
}

export async function storageFavoritesRemove(url: string, userId: string) {
  try {
    const storage = await storageFavoritesGetAll(userId);

    const filtered = storage.filter((item) => item !== url);

    const favorites = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${FAVORITE_STORAGE}_user:${userId}`, favorites);
  } catch (error) {
    throw error;
  }
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log("Storage clear!");
  } catch (error) {
    throw error;
  }
}
