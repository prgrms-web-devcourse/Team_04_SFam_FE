import DislikeIcon from '@assets/icons/dislike.svg';
import LikeIcon from '@assets/icons/like.svg';
import GreatIcon from '@assets/icons/great.svg';
import ReviewItem from './ReviewItem/ReviewItem';
import * as S from './ReviewGroup.style';

interface Props {
  greatCount: number;
  likeCount: number;
  dislikeCount: number;
}

const ReviewGroup = ({ greatCount, likeCount, dislikeCount }: Props) => (
  <S.ReviewGroupWrapper>
    <ReviewItem
      iconSrc={GreatIcon}
      iconAlt='GreatIcon'
      reviewText='최고에요'
      reviewCount={greatCount}
    />
    <ReviewItem
      iconSrc={LikeIcon}
      iconAlt='LikeIcon'
      reviewText='좋아요'
      reviewCount={likeCount}
    />
    <ReviewItem
      iconSrc={DislikeIcon}
      iconAlt='DislikeIcon'
      reviewText='별로에요'
      reviewCount={dislikeCount}
    />
  </S.ReviewGroupWrapper>
);

export default ReviewGroup;
