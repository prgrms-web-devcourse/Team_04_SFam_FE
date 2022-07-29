import styled from '@emotion/styled';

interface Props {
  color: string;
  width: string;
  height: string;
  radius: string;
  fontSize: string;
}

const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: ${({ radius }) => radius};
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
