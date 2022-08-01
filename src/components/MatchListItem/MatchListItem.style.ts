import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  padding: 10px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
`;

export const Title = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

export const Content = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
