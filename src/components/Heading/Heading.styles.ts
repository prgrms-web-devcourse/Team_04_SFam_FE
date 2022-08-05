import styled from '@emotion/styled';

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.background};
  border-bottom: 1px solid ${(props) => props.theme.color.gray400};
  z-index: 1;
`;

export const HeadingTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.b1};
  font-weight: bold;
`;
