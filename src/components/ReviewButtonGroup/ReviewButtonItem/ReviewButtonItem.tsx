import Image from 'next/image';
import { ComponentProps } from 'react';

import * as S from './ReviewButtonItem.styles';

interface Props {
  id: string;
  iconSrc: string;
  iconAlt?: string;
  reviewText: string;
  onClick: ComponentProps<'button'>['onClick'];
}

const ReviewButtonItem = ({ id, iconSrc, iconAlt = '', reviewText, onClick }: Props) => (
  <S.ReviewButton
    onClick={onClick}
    id={id}
  >
    <S.ReviewWrapper>
      <Image
        src={iconSrc}
        alt={iconAlt}
        width='65px'
        height='65px'
      />
      <S.ReviewText>{reviewText}</S.ReviewText>
    </S.ReviewWrapper>
  </S.ReviewButton>
);

export default ReviewButtonItem;
