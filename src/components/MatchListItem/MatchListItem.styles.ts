import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.background};
  /* border-bottom: 1px solid #adb5bd; */
  padding: 11px 20px 10px 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
