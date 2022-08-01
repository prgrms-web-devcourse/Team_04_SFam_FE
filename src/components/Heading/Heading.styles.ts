import styled from '@emotion/styled';
import { HeadingTitleProps } from './types';

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 1rem;
`;

export const HeadingTitle = styled.h1<HeadingTitleProps>`
  font-size: ${(props) => props.theme.fontSize.b1};
  font-weight: bold;
`;
