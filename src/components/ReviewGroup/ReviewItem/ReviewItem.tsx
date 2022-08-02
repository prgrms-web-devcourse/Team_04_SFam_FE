import Image from 'next/image';
import * as S from './ReviewItem.styles';

interface Props {
  iconSrc: string;
  iconAlt?: string;
  reviewText: string;
  reviewCount: number;
}

const ReviewItem = ({ iconSrc, iconAlt = '', reviewText, reviewCount }: Props) => (
  <S.ReviewItemWrapper>
    <Image
      src={iconSrc}
      alt={iconAlt}
      width='65px'
      height='65px'
    />
    <S.ReviewText>{reviewText}</S.ReviewText>
    <S.ReviewCount>{reviewCount}</S.ReviewCount>
  </S.ReviewItemWrapper>
);

export default ReviewItem;
