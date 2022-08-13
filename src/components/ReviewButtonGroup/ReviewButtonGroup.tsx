import React from 'react';

import DislikeIcon from '@assets/icons/dislike.svg';
import BestIcon from '@assets/icons/great.svg';
import LikeIcon from '@assets/icons/like.svg';

import * as S from './ReviewButtonGroup.styles';
import { ReviewButtonItem } from './ReviewButtonItem';

interface Props {
  review: string;
  setReview: (value: string | ((prevVar: string) => string)) => void;
}

const ReviewButtonGroup = ({ review, setReview }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setReview(e.currentTarget.id);
  };
  return (
    <S.Container>
      <S.BestWrapper review={review}>
        <ReviewButtonItem
          id='BEST'
          iconSrc={BestIcon}
          iconAlt='BEST'
          reviewText='최고에요'
          onClick={handleClick}
        />
      </S.BestWrapper>
      <S.LikeWrapper review={review}>
        <ReviewButtonItem
          id='LIKE'
          iconSrc={LikeIcon}
          iconAlt='like'
          reviewText='좋아요'
          onClick={handleClick}
        />
      </S.LikeWrapper>
      <S.DislikeWrapper review={review}>
        <ReviewButtonItem
          id='DISLIKE'
          iconSrc={DislikeIcon}
          iconAlt='dislike'
          reviewText='별로에요'
          onClick={handleClick}
        />
      </S.DislikeWrapper>
    </S.Container>
  );
};

export default ReviewButtonGroup;
