import { useCallback, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { ArrowLeft, Star } from "phosphor-react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { PokemonDTO } from "@models/PokemonDTO";
import { api } from "@services/api";

import { Actions, Container, Name } from "./styles";
import { getBackgroundColor } from "@utils/getBackgroundColor";

type RouteParams = {
  name: string;
};

export function Details() {
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const { name } = route.params as RouteParams;
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function loadPokemonData() {
    try {
      setIsLoading(true);
      const response = await api.get(`/pokemon/${name}`);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadPokemonData();
    }, [])
  );

  return (
    <Container
      style={{
        backgroundColor: getBackgroundColor(pokemon?.types[0].type.name)[0],
      }}
    >
      <Actions>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeft color="white" weight="bold" size={24} />
        </TouchableOpacity>

        <Name>{pokemon?.name}</Name>

        <Pressable>
          <Star size={24} color="white" weight="bold" />
        </Pressable>
      </Actions>
    </Container>
  );
}
