import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.color.background};
  background-color: ${({ color, theme }) => (color === 'select' ? `${theme.color.primary}` : `${theme.color.gray300}`)};
  font-size: 20px;
  font-weight: 600;
  height: 45px;
  margin-bottom: 15px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.color.background};
  background-color: ${({ theme }) => theme.color.secondary};
  font-size: 20px;
  font-weight: 600;
  height: 45px;
  margin-top: 20px;
`;
