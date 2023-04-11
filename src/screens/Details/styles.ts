import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 80px 20px 0px 20px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: white;
`;
