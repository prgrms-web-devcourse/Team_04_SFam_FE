import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { Navigator } from '@components/common/Navigator';
import { Heading } from '@components/Heading';
import { publicPath } from '@constants/publicPath';
import { useAxiosInterceptor } from '@hooks/useAxiosInterceptor';
import { userState } from '@recoil/atoms';
import { Main } from '@styles/common';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const user = useRecoilValue(userState);
  const [isLoading, setIsLoading] = React.useState(true);
  useAxiosInterceptor();

  useEffect(() => {
    const userCheck = async () => {
      if (!publicPath.includes(router.pathname) && user.id === undefined) {
        await router.replace('/');
      } else if (publicPath.includes(router.pathname) && user.id !== undefined) {
        await new Promise(() => {
          if (
            document.referrer &&
            (document.referrer.indexOf('dongkyurami.link') !== -1 || document.referrer.indexOf('localhost'))
          ) {
            router.back();
          } else {
            router.replace('/matches');
          }
        });
      } else if (
        user.id !== undefined &&
        router.pathname !== `/user/[id]` &&
        (user.latitude === null || user.longitude === null || user.searchDistance === null)
      ) {
        await router.replace(`/user/${user.id}/location`);
      }
    };
    (async () => {
      await userCheck();
      setIsLoading(false);
    })();
  }, [router.pathname]);

  if (isLoading) return null;
  if (router.pathname === '/') {
    return <main style={{ height: '100%' }}>{children}</main>;
  }
  if (router.pathname === '/chatlist/[matchProposalId]' || router.pathname === '/matches/[id]/result') {
    return <Main>{children}</Main>;
  }
  if (router.pathname === '/signin' || router.pathname === '/signup') {
    return (
      <>
        <Heading />
        <Main>{children}</Main>
      </>
    );
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
