import styled from '@emotion/styled';

interface Props {
  color: string | undefined;
  width: string;
  height: string;
  round: boolean;
  fontSize: string;
}

const ButtonContainer = styled.button<Props>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    fontWeight: 'bold',
    color: '#fff',
  },
  ({ width, height, round, color, fontSize }) => ({
    width,
    height,
    borderRadius: round
      ? `${parseInt(height.replace('px', ''), 10) / 2}px`
      : '8px',
    backgroundColor: color === 'primary' ? '#1fab89' : '#f19a78',
    fontSize,
    '&:active': {
      backgroundColor: color === 'primary' ? '#178a6e' : '#ed794c',
    },
  }),
);

export default ButtonContainer;
