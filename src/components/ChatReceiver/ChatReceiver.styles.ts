import styled from '@emotion/styled';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

export const ChatWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
});

export const MessageContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
});

export const ProfileWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const ReceiverWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  borderRadius: '8px',
  backgroundColor: '#e6e6e6',
  maxWidth: '200px',
});

export const TimeWrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  width: '100px',
  marginBottom: '5px',
});

export const ChatText = styled('span')(({ theme }) => ({
  color: '#000',
  fontSize: theme.fontSize.b3,
}));

export const ProfileText = styled('span')(
  {
    color: '#000',
    padding: '8px 0 8px 0',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b3,
  }),
);
