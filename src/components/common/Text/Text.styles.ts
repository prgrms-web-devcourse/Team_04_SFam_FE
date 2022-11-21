import styled from '@emotion/styled';

export interface StyleProps {
  tag?: string;
  fontSize?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  color?: string;
}

export const StyledText = styled('span')<StyleProps>({}, ({ theme, tag, fontSize, fontWeight, fontStyle, color }) => {
  const getFontSize = () => {
    if (tag) {
      const compareTag = tag.toLowerCase();
      if (compareTag.includes('h1')) return theme.fontSize.h1;
      if (compareTag.includes('h2')) return theme.fontSize.h2;
      if (compareTag.includes('b1')) return theme.fontSize.b1;
      if (compareTag.includes('b2')) return theme.fontSize.b2;
      if (compareTag.includes('b3')) return theme.fontSize.b3;
      if (compareTag.includes('b4')) return theme.fontSize.b4;
      if (compareTag.includes('c1')) return theme.fontSize.c1;
      if (compareTag.includes('c2')) return theme.fontSize.c2;
    }
  };
  const getFontWeight = () => {
    if (tag && tag.toLowerCase().includes('bold')) return 'bold';
  };
  const getFontStyle = () => {
    if (tag && tag.toLowerCase().includes('normal')) return 'normal';
    if (tag && tag.toLowerCase().includes('italic')) return 'italic';
    if (tag && tag.toLowerCase().includes('oblique')) return 'oblique';
    if (tag && tag.toLowerCase().includes('initial')) return 'initial';
  };
  const getColor = () => {
    if (tag && tag.toLowerCase().includes('gray')) return theme.color.gray400;
    if (tag && tag.toLowerCase().includes('green')) return theme.color.secondary;
    if (tag && tag.toLowerCase().includes('orange')) return theme.color.primary;
  };
  return {
    fontSize: fontSize || getFontSize(),
    fontWeight: fontWeight || getFontWeight(),
    fontStyle: fontStyle || getFontStyle(),
    color: color || getColor(),
  };
});
