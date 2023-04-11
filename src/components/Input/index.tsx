import { Input as NativeBaseInput, IInputProps } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";
import { useTheme } from "styled-components";

export function Input({ ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <NativeBaseInput
      bg="gray.100"
      h="48px"
      borderWidth={1}
      borderColor={theme.COLORS.GRAY_400}
      mb={1}
      _focus={{
        bg: "gray.100",
        borderWidth: "1px",
        borderColor: theme.COLORS.BLUE_WATER,
      }}
      rightElement={
        <MagnifyingGlass style={{ marginRight: 10 }} size={20} color="gray" />
      }
      {...rest}
    />
  );
}
