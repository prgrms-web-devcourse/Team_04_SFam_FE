import styled from '@emotion/styled';

export const ImageWrapper = styled.div<{ block: boolean; imgSize: string }>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${({ imgSize }) => imgSize};
  height: ${({ imgSize }) => imgSize};
  position: relative;
  border-radius: 50%;
  background-color: #eee;
  overflow: hidden;
  cursor: default;
  > img {
    transition: opacity 0.3s ease-out;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
