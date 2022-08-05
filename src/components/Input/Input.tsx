import * as S from './Input.styles';

interface Props {
  type?: string;
  name?: string;
  value?: string;
  height?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type = 'text', name = '', value = '', height = '', placeholder = '', onChange }: Props) => (
  <S.Input
    type={type}
    name={name}
    value={value}
    height={height}
    placeholder={placeholder}
    onChange={onChange}
  />
);
export default Input;
