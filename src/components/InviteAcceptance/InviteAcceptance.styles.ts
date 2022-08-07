import { Button } from '@components/Button/Button.styles';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 30px 20px;
`;

export const TextContainer = styled.div`
  margin-top: 50px;
  padding-left: 10px;
`;

export const Team = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.b2};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const RejectButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const AcceptButton = styled(Button)``;
