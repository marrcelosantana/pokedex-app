import { useState } from "react";
import { CheckIcon, Select } from "native-base";

type Props = {
  setPage(page: number): void;
};

export function Menu({ setPage }: Props) {
  const [region, setRegion] = useState("");

  if (region === "kanto") {
    setPage(0);
  }

  if (region === "johto") {
    setPage(151);
  }

  if (region === "hoenn") {
    setPage(251);
  }

  if (region === "sinnoh") {
    setPage(386);
  }

  if (region === "unova") {
    setPage(493);
  }

  if (region === "kalos") {
    setPage(649);
  }

  if (region === "alola") {
    setPage(721);
  }

  if (region === "galar") {
    setPage(809);
  }

  if (region === "hisui") {
    setPage(898);
  }

  if (region === "paldea") {
    setPage(905);
  }

  // switch (region) {
  //   case "kanto":
  //     setPage(0);
  //   case "johto":
  //     setPage(151);
  //   case "hoenn":
  //     setPage(251);
  //   case "sinnoh":
  //     setPage(386);
  //   case "unova":
  //     setPage(493);
  //   case "kalos":
  //     setPage(649);
  //   case "alola":
  //     setPage(721);
  //   case "galar":
  //     setPage(809);
  //   case "hisui":
  //     setPage(898);
  //   case "paldea":
  //     setPage(905);

  //   default:
  //     "kanto";
  // }

  return (
    <Select
      selectedValue={region}
      width="100%"
      h="48px"
      accessibilityLabel="Choose Region"
      placeholder="Region"
      _selectedItem={{
        bg: "gray.200",
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={(itemValue) => setRegion(itemValue)}
    >
      <Select.Item label="Kanto" value="kanto" />
      <Select.Item label="Johto" value="johto" />
      <Select.Item label="Hoenn" value="hoenn" />
      <Select.Item label="Sinnoh" value="sinnoh" />
      <Select.Item label="Unova" value="unova" />
      <Select.Item label="Kalos" value="kalos" />
      <Select.Item label="Alola" value="alola" />
      <Select.Item label="Galar" value="galar" />
      <Select.Item label="Hisui" value="hisui" />
      <Select.Item label="Paldea" value="paldea" />
    </Select>
  );
}
