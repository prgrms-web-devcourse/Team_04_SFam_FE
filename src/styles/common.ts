import styled from '@emotion/styled';

import { WrapperProps } from 'types';

interface Props {
  pointer?: boolean;
}

export const Main = styled.main({
  height: 'calc(100% - 120px)',
  margin: '64px 0 56px 0',
  overflow: 'auto',
});

export const Container = styled('div')({
  margin: '0 20px',
});

export const ColWrapper = styled('div')<WrapperProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px 0',
  },
  ({ width, alignItems, justifyContent, padding, gap, height }) => ({
    width,
    alignItems,
    justifyContent,
    padding,
    gap,
    height,
  }),
);

export const RowWrapper = styled('div')<WrapperProps>(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    margin: '16px 0',
  },
  ({ alignItems, justifyContent, padding, gap }) => ({
    alignItems,
    justifyContent,
    padding,
    gap,
  }),
);
export const InnerWrapper = styled('div')<WrapperProps>(
  {
    display: 'flex',
  },
  ({ width, flexDirection, alignItems, justifyContent, margin, padding, gap, flexWrap, flexGrow }) => ({
    width,
    alignItems,
    justifyContent,
    margin,
    padding,
    gap: gap || '8px',
    flexGrow,
    // FIXME
    // flexDirection: flexDirection || 'row',
    // flexWrap,
  }),
);

export const InlineWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
});

export const RadioWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
  gap: '8px',
});

export const BadgeWrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
});

export const TitleWrapper = styled('div')({
  fontSize: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const ContentWrapper = styled('div')(
  {
    maxWidth: '250px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  ({ theme }) => ({
    color: theme.color.gray400,
  }),
);

export const DropdownWrapper = styled('div')<WrapperProps>(({ width }) => ({
  width,
}));

export const BottomFixedWrapper = styled('div')<WrapperProps>({
  position: 'fixed',
  padding: '8px 0 0 0',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: ' #fff',
});

export const RadioInput = styled('input')(
  {
    display: 'flex',
    width: '18px',
    height: '18px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    '&:checked': {
      appearance: 'none',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
    },
  },
  ({ theme }) => ({
    backgroundColor: theme.color.secondary,
  }),
);

export const SearchButton = styled('button')(
  {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    right: '5px',
    height: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  ({ theme }) => ({
    color: theme.color.gray300,
  }),
);

export const Label = styled('h2')(
  {
    fontWeight: 'bold',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b2,
  }),
);

// TODO: 리팩토링 시 Text 컴포넌트 만들 것

export const H1 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.h1,
}));

export const H2 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.h2,
}));

export const B1 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b1,
}));

export const B2 = styled('span')<Props>(({ theme, pointer }) => ({
  fontSize: theme.fontSize.b2,
  cursor: pointer ? pointer && 'pointer' : 'none',
}));

export const B3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
}));

export const B4 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b4,
}));

export const BoldB1 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b1,
  fontWeight: 'bold',
}));

export const BoldGrayB1 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b1,
  color: theme.color.gray400,
  fontWeight: 'bold',
}));

export const BoldB2 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b2,
  fontWeight: 'bold',
}));

export const BoldB3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  fontWeight: 'bold',
}));

export const GrayB2 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b2,
  color: theme.color.gray400,
}));

export const BoldGrayB2 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b2,
  color: theme.color.gray400,
  fontWeight: 'bold',
}));

export const GrayB3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  color: theme.color.gray400,
}));

export const BoldGrayB3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  color: theme.color.gray400,
  fontWeight: 'bold',
}));

export const BoldGreenB3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  color: theme.color.secondary,
}));

export const BoldOrangeB3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  color: theme.color.primary,
}));

export const GrayB4 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b4,
  color: theme.color.gray400,
}));

export const ResetBtn = styled('button')(
  {
    display: 'flex',
    margin: 0,
    padding: 0,
    border: 'none',
    backgroundColor: '#fff',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b2,
  }),
);

export const TextArea = styled('textarea')(
  {
    width: '100%',
    padding: '8px',
    height: '242px',
    fontFamily: 'inherit',
    resize: 'none',
  },
  ({ theme }) => ({
    border: `1px solid ${theme.color.gray300}`,
    borderRadius: theme.borderRadius,
    fontSize: theme.fontSize.b3,
    '::placeholder': {
      fontSize: theme.fontSize.b3,
      color: theme.color.gray400,
    },
  }),
);

export const ChatMatchHeader = styled('div')(
  {
    width: '100%',
    position: 'absolute',
    top: '64px',
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
  },
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.color.gray200}`,
    backgroundColor: theme.color.background,
    zIndex: 10,
  }),
);

export const ChatMatchTitleWrapper = styled('div')({
  maxWidth: 'calc(100% - 32px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const ChatContainer = styled('div')({
  padding: '48px 8px 64px 16px',
});

export const MessageInput = styled('input')(
  {
    flexGrow: 1,
    height: '40px',
    padding: '16px',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b3,
    border: `1px solid ${theme.color.gray200}`,
    borderRadius: '8px',
  }),
);

export const Anchor = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
});

export const UserList = styled('div')({});

export const Icon = styled('div')({
  cursor: 'pointer',
});

export const NormalParagraph = styled('p')(
  {
    color: '#212529',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '16px',
    whiteSpace: 'pre-line',
    wordBreak: 'break-all',
  },
  ({ theme }) => ({
    border: `1px solid ${theme.color.gray200}`,
    borderRadius: theme.borderRadius,
  }),
);
