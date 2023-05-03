import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${RFPercentage(8)}px 0px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  margin-top: ${RFPercentage(4)}px;
  padding: 0px ${RFValue(24)}px;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.View`
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 999px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 6px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_BODY};
  margin-right: 4px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT_BODY};
`;

export const SignOutButton = styled.TouchableOpacity`
  width: ${RFValue(140)}px;
  height: ${RFValue(42)}px;
  margin-top: ${RFPercentage(8)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_BODY};
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(13)}px;
  margin-right: 4px;
`;
