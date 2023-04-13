import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const LogoImg = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
