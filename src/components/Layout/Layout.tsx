import { ReactNode } from 'react';
import { Heading } from '@components/Heading';
import { Navigator } from '@components/Navigator';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  if (router.pathname === '/') {
    return <main>{children}</main>;
  }
  return (
    <>
      <Heading />
      <main>{children}</main>

      <Navigator />
    </>
  );
};

export default Layout;
