import styled from '@emotion/styled';

interface Props {
  review: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BestWrapper = styled.div<Props>`
  opacity: ${(props) => (props.review === 'BEST' ? 1 : 0.5)};
  font-weight: ${(props) => (props.review === 'BEST' ? 'bold' : 'none')};
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;

export const LikeWrapper = styled.div<Props>`
  opacity: ${(props) => (props.review === 'LIKE' ? 1 : 0.5)};
  font-weight: ${(props) => (props.review === 'LIKE' ? 'bold' : 'none')};
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;

export const DislikeWrapper = styled.div<Props>`
  opacity: ${(props) => (props.review === 'DISLIKE' ? 1 : 0.5)};
  font-weight: ${(props) => (props.review === 'DISLIKE' ? 'bold' : 'none')};
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;
