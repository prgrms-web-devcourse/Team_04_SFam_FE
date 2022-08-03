import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  padding: 70px 0;
`;

export const Category = styled.div`
  text-align: center;
  width: 100%;
  height: 100px;
  padding-top: 10px;
  padding-left: 7px;
  overflow: auto;
  position: fixed;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: ${theme.color.background};
`;

export const ListContainer = styled.div`
  margin: 0 20px;
  padding-top: 110px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 134px;
`;
