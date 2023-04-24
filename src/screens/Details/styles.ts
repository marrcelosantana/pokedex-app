import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 80px 0px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-transform: capitalize;
  color: white;
`;

export const Content = styled.View`
  margin-top: 60px;
  align-items: center;
  width: 100%;
`;

export const AvatarContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 280px;
  height: 280px;
`;

export const InfoContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 20px 20px 0 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
`;

export const TabTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
`;

export const Infos = styled.View`
  flex: 1;
  margin-top: 30px;
`;
