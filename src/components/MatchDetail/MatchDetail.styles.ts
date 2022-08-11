import styled from '@emotion/styled';

import { Button } from '@components/Button/Button.styles';

export const Container = styled.div`
  padding: 16px 24px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 28px;
`;

export const Info = styled.div`
  padding: 24px 0 8px;
`;

export const Detail = styled.div`
  padding: 8px 0;
`;

export const DetailItem = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const DetailTitle = styled.span`
  font-size: 16px;
`;

export const RefuseButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const WaitingButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.yellow};
`;
