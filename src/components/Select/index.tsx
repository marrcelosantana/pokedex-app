import { useState } from "react";
import { CheckIcon, Select } from "native-base";

export function Menu() {
  const [region, setRegion] = useState("");

  return (
    <Select
      selectedValue={region}
      minWidth="30%"
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
      <Select.Item label="All" value="all" />
    </Select>
  );
}
