import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 722px;
  position: relative;
  background-color: ${({ theme }) => theme.color.gray200};
`;

export const Category = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  overflow: auto;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListContainer = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.gray200};
`;
