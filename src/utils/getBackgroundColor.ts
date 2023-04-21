import { useTheme } from "styled-components/native";

export const getBackgroundColor = (type: string | undefined) => {
  const theme = useTheme();
  switch (type) {
    case "normal":
      return [theme.COLORS.GREY_NORMAL, "#C6C6A7"];
    case "fire":
      return [theme.COLORS.ORANGE_FIRE, "#F5AC78"];
    case "water":
      return [theme.COLORS.BLUE_WATER, "#ADD8E6"];
    case "grass":
      return [theme.COLORS.GREEN_GRASS, "#A7DB8D"];
    case "electric":
      return [theme.COLORS.YELLOW_ELECTRIC, "#FAE078"];
    case "ice":
      return [theme.COLORS.BLUE_ICE, "#B0E0E6"];
    case "fighting":
      return [theme.COLORS.ORANGE_FIGHT, "#D67873"];
    case "poison":
      return [theme.COLORS.PURPLE_POISON, "#C183C1"];
    case "ground":
      return [theme.COLORS.YELLOW_GROUND, "#EBD69D"];
    case "flying":
      return [theme.COLORS.SILVER_FLY, "#C6B7F5"];
    case "psychic":
      return [theme.COLORS.PINK_PSYCHIC, "#FA92B2"];
    case "bug":
      return [theme.COLORS.GREEN_BUG, "#C6D16E"];
    case "rock":
      return [theme.COLORS.YELLOW_ROCK, "#D2B48C"];
    case "ghost":
      return [theme.COLORS.PURPLE_GHOST, "#A292BC"];
    case "dragon":
      return [theme.COLORS.PURPLE_DRAGON, "#A27DFA"];
    case "dark":
      return [theme.COLORS.GREY_DARK, "#A29288"];
    case "steel":
      return [theme.COLORS.GREY_STEEL, "#D1D1E0"];
    case "fairy":
      return [theme.COLORS.PINK_FAIRY, "#F4BDC9"];
    default:
      return theme.COLORS.GRAY_400;
  }
};
