import styled from '@emotion/styled';

interface Props {
  block: boolean;
  imgSize: string;
}

export const ImageWrapper = styled.div<Props>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${({ imgSize }) => imgSize};
  height: ${({ imgSize }) => imgSize};
  position: relative;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.green200};
  overflow: hidden;
  cursor: default;
  > img {
    transition: opacity 0.3s ease-out;
    object-fit: cover;
  }
`;
