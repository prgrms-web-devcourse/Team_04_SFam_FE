import { ReactNode } from 'react';
import { Heading } from '@components/Heading';
import { Navigator } from '@components/Navigator';
import { Main } from '@styles/common';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Heading />
    <Main>{children}</Main>
    <Navigator />
  </>
);

export default Layout;
