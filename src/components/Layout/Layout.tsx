import { ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { Heading } from '@components/Heading';
import { Navigator } from '@components/Navigator';
import { Main } from '@styles/common';
import { userState } from '@recoil/atoms';
import { publicPath } from '@constants/publicPath';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (!publicPath.includes(router.pathname) && user.id === undefined) {
      router.replace('/');
    } else if (publicPath.includes(router.pathname) && user.id !== undefined) {
      router.back();
    }
  }, [router.pathname]);

  if (router.pathname === '/') {
    return <Main>{children}</Main>;
  }
  return (
    <>
      <Heading />
      <Main>{children}</Main>
      <Navigator />
    </>
  );
};

export default Layout;
