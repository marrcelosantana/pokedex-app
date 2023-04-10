import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 10px;
  padding: 24px;
  flex-direction: row;
`;

export const InfoContainer = styled.View``;

export const Info = styled.View``;

export const PokeId = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
`;

export const PokeName = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  text-transform: capitalize;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Type = styled.View`
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 999px;
  padding: 5px 10px;
`;

export const TypeName = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
`;

export const AvatarContainer = styled.View``;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
`;
