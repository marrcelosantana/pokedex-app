import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${RFValue(50)}px 20px 0px 20px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const CardList = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  max-width: 100%;
`;

export const LoadingContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
