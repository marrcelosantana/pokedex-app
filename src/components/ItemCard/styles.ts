import styled from "styled-components/native";

export const Container = styled.View`
  width: 48%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-radius: 10px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Sprite = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-transform: capitalize;
`;
