import styled from '@emotion/styled';

export const Container = styled('div')({
  display: 'flex',
  gap: '16px',
  cursor: 'pointer',
});

export const ChatInfoContainer = styled('div')({
  display: 'flex',
  width: 'calc(100% -88px)',
  flexDirection: 'column',
  justifyContent: 'center',
  flexGrow: '1',
  gap: '8px',
});

export const MatchTitleWrapper = styled('div')({
  fontSize: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const LastChatWrapper = styled('div')({
  maxWidth: '250px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const MatchInfoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const MatchBadgeWrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
});
