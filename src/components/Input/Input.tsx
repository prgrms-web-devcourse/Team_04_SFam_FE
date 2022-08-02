import * as S from './Input.styles';

interface Props {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type = 'text', name = '', value = '', placeholder = '', onChange }: Props) => (
  <S.Input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
export default Input;
