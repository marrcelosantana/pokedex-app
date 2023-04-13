import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Infos = styled.Text`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_BODY};
  font-size: 16px;
`;

export const Info = styled.Text`
  text-transform: capitalize;
  font-size: 16px;
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
  font-weight: bold;
`;
