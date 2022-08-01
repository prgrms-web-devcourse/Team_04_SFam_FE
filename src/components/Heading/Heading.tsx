import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdArrowBackIos } from 'react-icons/md';
import * as S from './Heading.styles';
import { noBackIcon, headingTitle } from './types';

const Heading = () => {
  const router = useRouter();
  return (
    <S.HeadingWrapper>
      {!noBackIcon.includes(router.pathname) ? (
        <Link href='/'>
          <MdArrowBackIos />
        </Link>
      ) : (
        <div />
      )}
      <S.HeadingTitle>{headingTitle[router.pathname]}</S.HeadingTitle>
    </S.HeadingWrapper>
  );
};

export default Heading;
