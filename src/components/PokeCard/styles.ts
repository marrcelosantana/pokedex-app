import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-radius: 10px;
  padding: 24px;
  flex-direction: row;
`;

export const InfoContainer = styled.View``;

export const Info = styled.View``;

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
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 9999px;
`;

export const AvatarContainer = styled.View``;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
`;
