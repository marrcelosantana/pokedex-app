import { useTheme } from "styled-components/native";

export const getBackgroundColor = (type: string | undefined) => {
  const theme = useTheme();
  switch (type) {
    case "normal":
      return theme.COLORS.GREY_NORMAL;
    case "fire":
      return theme.COLORS.ORANGE_FIRE;
    case "water":
      return theme.COLORS.BLUE_WATER;
    case "grass":
      return theme.COLORS.GREEN_GRASS;
    case "electric":
      return theme.COLORS.YELLOW_ELECTRIC;
    case "ice":
      return theme.COLORS.BLUE_ICE;
    case "fighting":
      return theme.COLORS.ORANGE_FIGHT;
    case "poison":
      return theme.COLORS.PURPLE_POISON;
    case "ground":
      return theme.COLORS.YELLOW_GROUND;
    case "flying":
      return theme.COLORS.SILVER_FLY;
    case "psychic":
      return theme.COLORS.PINK_PSYCHIC;
    case "bug":
      return theme.COLORS.GREEN_BUG;
    case "rock":
      return theme.COLORS.YELLOW_ROCK;
    case "ghost":
      return theme.COLORS.PURPLE_GHOST;
    case "dragon":
      return theme.COLORS.PURPLE_DRAGON;
    case "dark":
      return theme.COLORS.GREY_DARK;
    case "steel":
      return theme.COLORS.GREY_STEEL;
    case "fairy":
      return theme.COLORS.PINK_FAIRY;
    default:
      return theme.COLORS.GRAY_400;
  }
};
