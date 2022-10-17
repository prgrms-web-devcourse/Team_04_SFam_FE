import { ColorType } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface StyleProps {
  bgColor: ColorType;
}

interface Props extends StyleProps {
  children: React.ReactNode | string;
}

const Tag = ({ bgColor, children }: Props) => <TagRoot bgColor={bgColor}>{children}</TagRoot>;

export default Tag;

const TagRoot = styled('div')<StyleProps>(
  {
    minWidth: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
  },
  ({ theme, bgColor }) => ({
    backgroundColor: theme.color[bgColor],
    color: theme.color.background,
    fontSize: theme.fontSize.c1,
    borderRadius: theme.borderRadius,
  }),
);
