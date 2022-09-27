import React from 'react';

import styled from '@emotion/styled';
import { MdAddAPhoto } from 'react-icons/md';

export interface Image {
  file: File;
  src: string;
}
interface Props {
  children: React.ReactNode;
  onImageSelect: (image: Image) => void;
}

const AvatarInput = ({ children, onImageSelect }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files?.length) return;

    const [file] = files;
    const reader = new FileReader();
    reader.onload = () => {
      onImageSelect({ file, src: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container onClick={() => inputRef.current?.click()}>
      {children}
      <IconWrapper>
        <MdAddAPhoto color='#fff' />
      </IconWrapper>
      <Input
        ref={inputRef}
        type='file'
        accept='image/jpg, image/jpeg, image/png'
        onChange={handleAvatarChange}
      />
    </Container>
  );
};

export default AvatarInput;

const Container = styled('div')({
  position: 'relative',
  cursor: 'pointer',
});

const Input = styled('input')({
  display: 'none',
});

const IconWrapper = styled('div')(
  {
    width: '32px',
    height: '32px',
    position: 'absolute',
    right: -16,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.secondary,
    border: `1px solid ${theme.color.secondaryActive}`,
    ':hover': {
      backgroundColor: theme.color.secondaryHover,
    },
    ':active': {
      backgroundColor: theme.color.secondaryActive,
    },
  }),
);
