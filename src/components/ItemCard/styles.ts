import styled from "styled-components/native";

export const Container = styled.View`
  width: 31%;
  height: 90px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_BODY};
`;

export const Sprite = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-transform: capitalize;
`;
