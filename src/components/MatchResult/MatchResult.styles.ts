import styled from '@emotion/styled';
import { Button } from '@components/Button/Button.styles';

export const Container = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled(Button)`
  background-color: ${({ color, theme }) => (color === 'select' ? `${theme.color.primary}` : `${theme.color.gray300}`)};
  margin-bottom: 15px;
`;

export const SubmitBtn = styled(Button)`
  background-color: ${({ theme }) => theme.color.secondary};
  margin-top: 20px;
`;
