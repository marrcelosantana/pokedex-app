import { Input as NativeBaseInput, IInputProps } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";
import { useTheme } from "styled-components";

export function Input({ ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <NativeBaseInput
      bg="gray.100"
      h="48px"
      w="84%"
      mt="8px"
      borderWidth={1}
      borderColor={theme.COLORS.BLUE_WATER}
      mb={1}
      _focus={{
        bg: "gray.100",
        borderWidth: "1px",
        borderColor: "blue.700",
      }}
      {...rest}
    />
  );
}
