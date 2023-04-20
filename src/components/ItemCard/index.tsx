import { useToast } from "native-base";
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

  const toast = useToast();

  async function loadItemData() {
    try {
      const response = await api.get(`${url}`);
      setData(response.data);
    } catch (error) {
      toast.show({
        title: "Error loading data!",
        placement: "top",
        bgColor: "red.300",
        color: "gray.100",
      });
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
