import * as S from './Divider.style';

interface Props {
  type?: string;
  size?: string;
}

const Divider = ({ type = 'middle', size = '500px' }: Props) => {
  const dividerStyle = {
    width: type === 'full' ? `100%` : `${size}`,
  };
  return <S.Line style={dividerStyle} />;
};

export default Divider;
