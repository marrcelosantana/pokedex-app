export function getTypeIcon(type: string | undefined) {
  switch (type) {
    case "normal":
      return "https://archives.bulbagarden.net/media/upload/e/e6/NormalIC_Masters.png";
    case "fire":
      return "https://archives.bulbagarden.net/media/upload/2/2e/FireIC_Masters.png";
    case "water":
      return "https://archives.bulbagarden.net/media/upload/3/3f/WaterIC_Masters.png";
    case "grass":
      return "https://archives.bulbagarden.net/media/upload/3/32/GrassIC_Masters.png";
    case "electric":
      return "https://archives.bulbagarden.net/media/upload/1/1a/ElectricIC_Masters.png";
    case "ice":
      return "https://archives.bulbagarden.net/media/upload/9/9b/IceIC_Masters.png";
    case "fighting":
      return "https://archives.bulbagarden.net/media/upload/0/06/FightingIC_Masters.png";
    case "poison":
      return "https://archives.bulbagarden.net/media/upload/f/f3/PoisonIC_Masters.png";
    case "ground":
      return "https://archives.bulbagarden.net/media/upload/7/74/GroundIC_Masters.png";
    case "flying":
      return "https://archives.bulbagarden.net/media/upload/2/2f/FlyingIC_Masters.png";
    case "psychic":
      return "https://archives.bulbagarden.net/media/upload/9/99/PsychicIC_Masters.png";
    case "bug":
      return "https://archives.bulbagarden.net/media/upload/8/82/BugIC_Masters.png";
    case "rock":
      return "https://archives.bulbagarden.net/media/upload/9/9e/RockIC_Masters.png";
    case "ghost":
      return "https://archives.bulbagarden.net/media/upload/6/68/GhostIC_Masters.png";
    case "dragon":
      return "https://archives.bulbagarden.net/media/upload/d/d7/DragonIC_Masters.png";
    case "dark":
      return "https://archives.bulbagarden.net/media/upload/4/43/DarkIC_Masters.png";
    case "steel":
      return "https://archives.bulbagarden.net/media/upload/3/39/SteelIC_Masters.png";
    case "fairy":
      return "https://archives.bulbagarden.net/media/upload/f/fa/FairyIC_Masters.png";
    default:
      return;
  }
}
