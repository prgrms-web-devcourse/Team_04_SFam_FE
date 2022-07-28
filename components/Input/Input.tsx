import { InputHTMLAttributes } from 'react';
import { StyledInput, Wrapper } from './Input.style';

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper>
      <StyledInput
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </Wrapper>
  );
}

export default Input;
