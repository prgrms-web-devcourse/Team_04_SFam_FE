import React from 'react';

import * as S from './Input.styles';

interface Props {
  type?: string;
  name?: string;
  value?: string;
  height?: string;
  id?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input = ({
  type = 'text',
  name = '',
  value = '',
  id = '',
  height = '',
  placeholder = '',
  onChange,
  onKeyDown,
}: Props) => (
  <S.Input
    type={type}
    value={value}
    name={name}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
    height={height}
  />
);
export default Input;
