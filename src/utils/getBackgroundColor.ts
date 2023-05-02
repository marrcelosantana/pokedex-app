export const getBackgroundColor = (type: string | undefined) => {
  switch (type) {
    case "normal":
      return ["#A8A878", "#C6C6A7"];
    case "fire":
      return ["#fd7d24", "#F5AC78"];
    case "water":
      return ["#6890F0", "#ADD8E6"];
    case "grass":
      return ["#78C850", "#A7DB8D"];
    case "electric":
      return ["#F8D030", "#FAE078"];
    case "ice":
      return ["#51c4e7", "#B0E0E6"];
    case "fighting":
      return ["#C03028", "#D67873"];
    case "poison":
      return ["#A040A0", "#C183C1"];
    case "ground":
      return ["#E0C068", "#EBD69D"];
    case "flying":
      return ["#A890F0", "#C6B7F5"];
    case "psychic":
      return ["#F85888", "#FA92B2"];
    case "bug":
      return ["#A8B820", "#C6D16E"];
    case "rock":
      return ["#a38c21", "#D2B48C"];
    case "ghost":
      return ["#705898", "#A292BC"];
    case "dragon":
      return ["#7038F8", "#A27DFA"];
    case "dark":
      return ["#705848", "#A29288"];
    case "steel":
      return ["#B8B8D0", "#D1D1E0"];
    case "fairy":
      return ["#EE99AC", "#F4BDC9"];
    default:
      return "#E1E1E6";
  }
};
