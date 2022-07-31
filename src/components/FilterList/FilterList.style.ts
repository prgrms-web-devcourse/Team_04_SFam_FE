import styled from '@emotion/styled';

// 여기는 헤더 컴포넌트 만들고 대체 하겠음

export const SportsContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100px;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  > {
    margin-right: 10px;
  }
`;
