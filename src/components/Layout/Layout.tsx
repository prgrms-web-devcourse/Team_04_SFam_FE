import { ReactNode } from 'react';
import { Heading } from '@components/Heading';
import { Navigator } from '@components/Navigator';
import { useRouter } from 'next/router';
import { Main } from '@styles/common';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
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
