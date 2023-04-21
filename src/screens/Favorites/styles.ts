import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 80px 20px 0 20px;
`;

export const Highlight = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
  font-size: 18px;
`;

export const CardsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex: 1;
`;

export const RemoveBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  padding: 6px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
