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
  > img {
    transition: opacity 0.3s ease-out;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const IconBadgeWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.secondary};

  :hover {
    background-color: ${(props) => props.theme.color.secondaryHover};
  }

  :active {
    background-color: ${(props) => props.theme.color.secondaryActive};
  }
`;
