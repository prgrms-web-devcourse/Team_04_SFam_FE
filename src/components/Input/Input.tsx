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
}

const Input = ({ type = 'text', name = '', value = '', id = '', height = '', placeholder = '', onChange }: Props) => (
  <S.Input
    type={type}
    value={value}
    name={name}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    height={height}
  />
);
export default Input;
