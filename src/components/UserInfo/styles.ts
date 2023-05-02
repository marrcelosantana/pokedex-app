import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding-top: ${RFPercentage(2)}px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  border-radius: 6px;
  margin-right: 10px;
`;

export const Info = styled.View`
  width: 62%;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const LogoutButton = styled.TouchableOpacity``;
