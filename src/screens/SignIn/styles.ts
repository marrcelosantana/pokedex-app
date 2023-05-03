import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(45)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(200)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Actions = styled.View``;

export const FooterText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(12)}px;
`;
