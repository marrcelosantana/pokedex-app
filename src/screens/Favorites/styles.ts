import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 80px 20px 0 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const CardsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;
