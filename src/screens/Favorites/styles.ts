import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${RFValue(50)}px 20px 0 20px;
`;

export const Highlight = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

export const EmptyList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(20)}px;
`;

export const EmptyText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_BODY};
  font-size: ${RFValue(22)}px;
  margin-top: ${RFPercentage(2)}px;
`;
