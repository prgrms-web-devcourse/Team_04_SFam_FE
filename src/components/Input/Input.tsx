import * as S from './Input.styles';

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type = 'text', name = '', placeholder = '', onChange }: Props) => (
  <S.Input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);
export default Input;
