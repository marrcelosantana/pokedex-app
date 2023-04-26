import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${RFValue(50)}px 20px 0px 20px;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  background-color: #e1e1e6;
  padding: 15px 40px 15px 15px;
  border-radius: 8px;
`;

export const SearchBtn = styled.Pressable`
  width: 52px;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_WATER};
`;

export const ButtonText = styled.Text`
  margin-right: 10px;
  color: white;
`;

export const LoadingContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MenuContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const CardList = styled.View`
  flex: 1;
`;
