import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 48px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 18px;
  text-transform: capitalize;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
`;
