import { ComponentProps } from 'react';
import Image from 'next/image';
import * as S from './Avatar.styles';

interface Props {
  block?: boolean;
  imgSize?: string;
  imgSrc?: string;
  imgAlt?: string;
  onClick?: ComponentProps<'div'>['onClick'];
}

const Avatar = ({ block = true, imgSize = '80px', imgSrc, imgAlt = '', onClick, ...props }: Props) => {
  return (
    <S.ImageWrapper
      block={block}
      imgSize={imgSize}
      onClick={onClick}
      {...props}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgSize}
          height={imgSize}
          {...props}
        />
      )}
    </S.ImageWrapper>
  );
};

export default Avatar;
