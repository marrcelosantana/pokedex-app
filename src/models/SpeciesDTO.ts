import { PokemonDTO } from "./PokemonDTO";

export type SpeciesDTO = {
  habitat: {
    name: string;
  };

  evolve_from_species: {
    name: string;
    url: string;
  };

  varieties: {
    is_default: boolean;
    pokemon: PokemonDTO;
  }[];

  flavor_text_entries: {
    flavor_text: string;
  }[];

  shape: {
    name: string;
  };
};
