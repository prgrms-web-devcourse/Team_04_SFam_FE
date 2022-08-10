import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 0 0 70px 0;
  z-index: -1;
  height: calc(100vh - 82px);
  background-color: ${({ theme }) => theme.color.gray200};
`;

export const Category = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  width: 100%;
  overflow: auto;
  position: fixed;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListContainer = styled.div`
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.gray200};
`;
