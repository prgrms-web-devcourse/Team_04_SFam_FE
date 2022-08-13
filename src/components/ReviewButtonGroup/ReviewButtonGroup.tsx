import React from 'react';

import DislikeIcon from '@assets/icons/dislike.svg';
import BestIcon from '@assets/icons/great.svg';
import LikeIcon from '@assets/icons/like.svg';

import * as S from './ReviewButtonGroup.styles';
import { ReviewButtonItem } from './ReviewButtonItem';

interface Props {
  setReview: (value: string | ((prevVar: string) => string)) => void;
}

const ReviewButtonGroup = ({ setReview }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setReview(e.currentTarget.id);
  };
  return (
    <S.Container>
      <ReviewButtonItem
        id='BEST'
        iconSrc={BestIcon}
        iconAlt='BEST'
        reviewText='최고에요'
        onClick={handleClick}
      />
      <ReviewButtonItem
        id='LIKE'
        iconSrc={LikeIcon}
        iconAlt='like'
        reviewText='좋아요'
        onClick={handleClick}
      />
      <ReviewButtonItem
        id='DISLIKE'
        iconSrc={DislikeIcon}
        iconAlt='dislike'
        reviewText='별로에요'
        onClick={handleClick}
      />
    </S.Container>
  );
};

export default ReviewButtonGroup;
