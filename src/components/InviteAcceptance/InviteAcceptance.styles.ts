import styled from '@emotion/styled';

import { Button } from '@components/common/Button/Button.styles';

export const Container = styled('div')({
  padding: '30px 20px',
});

export const TextContainer = styled('div')({
  marginTop: '50px',
  paddingLeft: '10px',
});

export const Team = styled('span')(
  {
    fontWeight: 'bold',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b2,
  }),
);

export const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: '30px',
});

export const RejectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.color.primary,
}));

export const AcceptButton = styled(Button)``;
