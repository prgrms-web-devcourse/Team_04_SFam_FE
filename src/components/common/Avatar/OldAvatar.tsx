import { ChangeEventHandler, useRef } from 'react';

import Image from 'next/image';
import { MdAddAPhoto } from 'react-icons/md';

import defaultLogo from '@assets/default_avatar.svg';

import * as S from './Avatar.styles';

interface Props {
  block?: boolean;
  imgSize?: string;
  imgSrc?: string;
  imgAlt?: string;
  borderRadius?: string;
  edit?: boolean;
  user?: boolean;
  team?: boolean;
  handleFileChange?: ChangeEventHandler<HTMLInputElement>;
}

const OldAvatar = ({
  block = true,
  borderRadius = '50%',
  imgSize = '80px',
  imgSrc = defaultLogo,
  imgAlt = '',
  edit = false,
  user = false,
  team = false,
  handleFileChange,
  ...props
}: Props) => {
  const selectFile = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (edit && selectFile.current !== null) {
      selectFile.current.click();
    }
  };

  return (
    <S.Container onClick={handleClick}>
      {(user || team) && (
        <input
          type='file'
          accept='image/jpg, image/jpeg, image/png'
          ref={selectFile}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      )}
      <S.ImageWrapper
        block={block}
        imgSrc={imgSrc}
        imgSize={imgSize}
        borderRadius={borderRadius}
        {...props}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgSize}
            height={imgSize}
            objectFit='cover'
            {...props}
          />
        )}
      </S.ImageWrapper>
      {edit && (
        <S.IconBadgeWrapper>
          <MdAddAPhoto color='#fff' />
        </S.IconBadgeWrapper>
      )}
    </S.Container>
  );
};

export default OldAvatar;
