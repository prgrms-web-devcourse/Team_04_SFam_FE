import styled from '@emotion/styled';
import theme from '@styles/theme';

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 1rem;
  position: fixed;
  background-color: ${theme.color.background};
  border-bottom: 1px solid ${theme.color.gray400};
`;

export const HeadingTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.b1};
  font-weight: bold;
`;
