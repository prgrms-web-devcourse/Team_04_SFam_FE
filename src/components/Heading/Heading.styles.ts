import styled from '@emotion/styled';

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 1rem;
`;

export const HeadingTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.b1};
  font-weight: bold;
`;
