import { AbilitiesDTO } from "./AbilitiesDTO";
import { StatsDTO } from "./StatsDTO";
import { TypesDTO } from "./TypesDTO";

export type PokemonDTO = {
  id: number;
  name: string;
  weight: number;
  height: number;

  types: TypesDTO[];
  abilities: AbilitiesDTO[];
  stats: StatsDTO[];

  species: {
    name: string;
    url: string;
  };

  sprites: {
    front_default: string;
    front_shiny: string;

    other: {
      dream_world: {
        front_default: string;
      };

      home: {
        front_default: string;
        front_shiny: string;
      };

      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
  };
};
