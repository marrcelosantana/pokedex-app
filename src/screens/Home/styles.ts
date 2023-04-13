import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 80px 20px 0px 20px;
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

export const LoadingContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
