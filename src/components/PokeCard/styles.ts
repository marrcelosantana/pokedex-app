import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-radius: 10px;
  padding: 24px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bold;
  color: white;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const TypeImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-width: 1px;
  border-color: white;
  border-radius: 99px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;
