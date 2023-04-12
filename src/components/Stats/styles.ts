import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ProgressContainer = styled.View`
  width: 100%;
  margin-top: 15px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
