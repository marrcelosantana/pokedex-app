import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Infos = styled.Text`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-transform: capitalize;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Type = styled.View`
  margin-top: 10px;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const TypeName = styled.Text`
  color: white;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
