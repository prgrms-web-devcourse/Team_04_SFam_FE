import Image from 'next/image';
import { ChangeEventHandler, useRef } from 'react';
import { MdAddAPhoto } from 'react-icons/md';

import defaultLogo from '@assets/logo/default_profile_image.svg';
import { IconBadgeWrapper } from '@styles/common';

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

const Avatar = ({
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
    <>
      <S.ImageWrapper
        block={block}
        imgSrc={imgSrc}
        imgSize={imgSize}
        borderRadius={borderRadius}
        onClick={handleClick}
        {...props}
      >
        {user && (
          <input
            type='file'
            accept='image/jpg, image/jpeg, image/png'
            ref={selectFile}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        )}
        {team && (
          <input
            type='file'
            accept='image/jpg, image/jpeg, image/png'
            ref={selectFile}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        )}
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
        <IconBadgeWrapper width='100px'>
          <MdAddAPhoto color='#000' />
        </IconBadgeWrapper>
      )}
    </>
  );
};

export default Avatar;
