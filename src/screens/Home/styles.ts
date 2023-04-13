import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 80px 20px 0px 20px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const LogoImg = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  background-color: #e1e1e6;
  padding: 15px 40px 15px 15px;
  border-radius: 8px;
`;

export const LoadingContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
