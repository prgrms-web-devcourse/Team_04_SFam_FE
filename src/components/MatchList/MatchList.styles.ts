import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 0 0 70px 0;
  z-index: -1;
`;

export const Category = styled.div`
  text-align: center;
  width: 100%;
  height: 100px;
  padding: 20px 10px 0 7px;
  overflow: auto;
  position: fixed;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: ${({ theme }) => theme.color.background}; ;
`;

export const ListContainer = styled.div`
  margin: 0 20px;
  padding-top: 100px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Anchor = styled.a`
  text-decoration: none;
`;
