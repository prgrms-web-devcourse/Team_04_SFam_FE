import styled from '@emotion/styled';

interface Props {
  color: string | undefined;
  width: string;
  height: string;
  round: boolean;
  fontSize: string;
}

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }: Props) => width};
  height: ${({ height }: Props) => height};
  border: none;
  border-radius: ${({ round, height }: Props) =>
    round ? `${parseInt(height.replace('px', ''), 10) / 2}px` : '8px'};
  background-color: ${({ color }: Props) =>
    color === 'primary' ? '#1FAB89' : '#F19A78'};
  font-size: ${({ fontSize }: Props) => fontSize};
  font-weight: bold;
  color: #fff;
  &:active {
    background-color: ${({ color }: Props) =>
      color === 'primary' ? '#178A6E' : '#ED794C'};
  }
`;

export default ButtonContainer;
