import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<{ result: string; selected: boolean }>`
  width: 30%;
  height: 100px;
  font-size: 20px;
  background-color: ${({ theme, result, selected }) => {
    if (selected) {
      if (result === 'WIN') {
        return theme.color.secondary;
      }
      if (result === 'LOSE') {
        return theme.color.primary;
      }
      if (result === 'DRAW') {
        return theme.color.gray400;
      }
    }
    return theme.color.background;
  }};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  border: 1px solid ${(props) => props.theme.color.gray200};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  :hover {
    background-color: ${({ theme, result }) => {
      if (result === 'WIN') {
        return theme.color.secondary;
      }
      if (result === 'LOSE') {
        return theme.color.primary;
      }
      if (result === 'DRAW') {
        return theme.color.gray400;
      }
      return theme.color.background;
    }};
    border: none;
    color: #fff;
    transform: scale(1.1);
  }
`;
