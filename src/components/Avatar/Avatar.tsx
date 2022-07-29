import * as S from './Avatar.styles';

interface Props {
  block?: boolean;
  imgSize?: string;
  imgSrc?: string;
  imgAlt?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Avatar = ({ block = true, imgSize = '80px', imgSrc, imgAlt = '', onClick, ...props }: Props) => {
  return (
    <S.ImageWrapper
      block={block}
      imgSize={imgSize}
      onClick={onClick}
      {...props}
    >
      {imgSrc && (
        <S.Img
          src={imgSrc}
          alt={imgAlt}
        />
      )}
    </S.ImageWrapper>
  );
};

export default Avatar;
