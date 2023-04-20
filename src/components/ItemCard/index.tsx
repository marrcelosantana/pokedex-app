import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { api } from "@services/api";
import { ItemDTO } from "@models/ItemDTO";

import { Container, Sprite, Title } from "./styles";

type Props = {
  url: string;
};

export function ItemCard({ url }: Props) {
  const [data, setData] = useState<ItemDTO>();

  async function loadItemData() {
    try {
      const response = await api.get(`${url}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadItemData();
    }, [])
  );

  return (
    <Container>
      <Title numberOfLines={1}>{data?.name}</Title>
      <Sprite source={{ uri: data?.sprites.default }} />
    </Container>
  );
}
