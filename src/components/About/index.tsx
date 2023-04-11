import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { SpeciesDTO } from "@models/SpeciesDTO";
import { api } from "@services/api";

import { Container, Title } from "./styles";

type Props = {
  species: {
    name: string;
    url: string;
  };
};

export function About({ species }: Props) {
  const [specieData, setSpecieData] = useState<SpeciesDTO>();

  async function loadSpeciesData() {
    try {
      const response = await api.get(`${species.url}`);
      setSpecieData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadSpeciesData();
    }, [])
  );

  return (
    <Container>
      <Title>{specieData?.flavor_text_entries[0].flavor_text}</Title>
    </Container>
  );
}
