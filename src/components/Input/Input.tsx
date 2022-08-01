import { ComponentProps } from 'react';
import * as S from './Input.styles';

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: ComponentProps<'input'>['onChange'];
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({
  type = 'text',
  name = '',
  placeholder = '',
  value,
  onChange,
  readOnly = false,
  required = false,
  disabled = false,
  ...props
}: Props) => (
  <S.InputWrapper>
    <S.StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
      disabled={disabled}
      {...props}
    />
  </S.InputWrapper>
);

export default Input;
