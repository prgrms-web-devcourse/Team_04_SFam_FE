import styled from '@emotion/styled';

import { Props } from './types';

export const ParagraphWrapper = styled('div')<Props>(
  {
    display: 'flex',
    alignItems: 'flex-start',
  },
  ({ theme, width, height }) => ({
    width,
    height,
    backgroundColor: theme.color.green100,
    borderRadius: theme.borderRadius,
  }),
);

export const Paragraph = styled('p')<Props>(
  {
    fontWeight: 'bold',
    padding: '20px',
    whiteSpace: 'pre-line',
    wordBreak: 'break-all',
  },
  ({ theme, fontColor, fontSize }) => ({
    color: fontColor === 'default' ? `${theme.color.gray700}` : fontColor,
    fontSize: fontSize === 'default' ? `${theme.fontSize.b3}` : fontSize,
  }),
);
