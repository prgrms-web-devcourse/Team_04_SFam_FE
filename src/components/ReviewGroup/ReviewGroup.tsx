import DislikeIcon from '@assets/icons/dislike.svg';
import BestIcon from '@assets/icons/great.svg';
import LikeIcon from '@assets/icons/like.svg';

import * as S from './ReviewGroup.styles';
import ReviewItem from './ReviewItem/ReviewItem';

interface Props {
  bestCount: number;
  likeCount: number;
  dislikeCount: number;
}

const ReviewGroup = ({ bestCount, likeCount, dislikeCount }: Props) => (
  <S.ReviewGroupWrapper>
    <ReviewItem
      iconSrc={BestIcon}
      iconAlt='BestIcon'
      reviewText='최고에요'
      reviewCount={bestCount}
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
