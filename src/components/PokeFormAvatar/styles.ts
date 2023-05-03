import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;

export const AvatarContainer = styled.View`
  width: 110px;
  height: 110px;
  border-radius: 999px;
  padding: 20px;
  border: 3px solid;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-transform: capitalize;
  margin-top: 8px;
  margin-right: 8px;
`;
