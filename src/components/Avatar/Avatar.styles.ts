import styled from '@emotion/styled';

interface Props {
  block: boolean;
  imgSrc: string;
  imgSize: string;
  borderRadius: string;
}

export const ImageWrapper = styled.div<Props>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  width: ${({ imgSize }) => imgSize};
  height: ${({ imgSize }) => imgSize};
  position: relative;
  border: ${(props) => props.imgSrc && `1px solid ${props.theme.color.gray200}`};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  background-color: ${(props) => (props.imgSrc ? 'none' : props.theme.color.green200)};
  overflow: hidden;
  cursor: default;
  > img {
    transition: opacity 0.3s ease-out;
    object-fit: cover;
  }
`;
