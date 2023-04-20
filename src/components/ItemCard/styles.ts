import styled from "styled-components/native";

export const Container = styled.View`
  width: 31%;
  height: 90px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Sprite = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-transform: capitalize;
`;
