import styled from '@emotion/styled';
import Image from 'next/image';

import defaultSrc from '@assets/default_avatar.svg';

interface Props {
  src?: string;
  size?: string;
  alt?: string;
}

const Avatar = ({ size = '80px', src = defaultSrc, alt = '' }: Props) => (
  <ImageWrapper size={size}>
    <Image
      src={src || defaultSrc}
      alt={alt}
      layout='fill'
      objectFit='cover'
    />
  </ImageWrapper>
);

export default Avatar;

const ImageWrapper = styled.div<Pick<Props, 'size'>>(({ size, theme }) => ({
  width: size,
  height: size,
  position: 'relative',
  border: `1px solid ${theme.color.gray200}`,
  borderRadius: '50%',
  overflow: 'hidden',
}));
