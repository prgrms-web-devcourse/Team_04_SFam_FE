import styled from '@emotion/styled';

interface Props {
  color: string;
  width: string;
  height: string;
  round: boolean;
  fontSize: string;
}

const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: ${({ round, height }) =>
    // eslint-disable-next-line no-nested-ternary
    round
      ? height?.includes('px')
        ? `${parseInt(height?.replace('px', ''), 10) / 2}px`
        : `${parseInt(height?.replace('rem', ''), 10) / 2}rem`
      : '8px'};
  background-color: ${({ color }) =>
    color === 'primary' ? '#1fab89' : '#f19a78'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  color: #fff;
  &:active {
    background-color: ${({ color }) =>
      color === 'primary' ? '#178a6e' : '#ed794c'};
  }
`;

export default ButtonContainer;
