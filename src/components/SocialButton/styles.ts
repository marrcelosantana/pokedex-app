import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(46)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-bottom: 16px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_BODY};
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
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(14)}px;
`;
