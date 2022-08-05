import styled from '@emotion/styled';
import { Button } from '@components/Button';

export const Container = styled.div`
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled(Button)`
  margin-bottom: 15px;
`;

export const SubmitBtn = styled(Button)`
  margin-top: 30px;
`;
