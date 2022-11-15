import styled from '@emotion/styled';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

export const ChatWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
});

export const SenderWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  borderRadius: '8px',
  backgroundColor: '#1fab89',
  maxWidth: '200px',
});

export const TimeWrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  width: '100px',
  marginBottom: '4px',
});

export const ChatText = styled('span')(
  {
    color: '#fff',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b3,
  }),
);
