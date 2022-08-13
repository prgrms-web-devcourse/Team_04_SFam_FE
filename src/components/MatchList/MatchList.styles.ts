import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  position: relative;
  padding: 0 0 64px 0;
  background-color: ${({ theme }) => theme.color.gray200};
`;

export const Category = styled.div`
  position: absolute;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  gap: 12px;
  overflow: auto;
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
