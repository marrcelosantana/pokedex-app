import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(46)}px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-bottom: 16px;
  border-radius: 5px;
  border: 1px solid #969cb3;
`;

export const ImageContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: #4d4d4d;
  font-size: ${RFValue(14)}px;
`;
