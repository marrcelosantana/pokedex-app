import { Input as NativeBaseInput, IInputProps } from "native-base";
import { useTheme } from "styled-components";

export function Input({ ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <NativeBaseInput
      bg={theme.COLORS.SHAPE}
      h="48px"
      w="84%"
      mt="8px"
      fontFamily={theme.FONT_FAMILY.REGULAR}
      fontSize={14}
      borderWidth={1}
      borderColor={theme.COLORS.TEXT_BODY}
      mb={1}
      _focus={{
        bg: theme.COLORS.SHAPE,
        borderWidth: "1px",
        borderColor: theme.COLORS.TEXT_BODY,
      }}
      {...rest}
    />
  );
}
