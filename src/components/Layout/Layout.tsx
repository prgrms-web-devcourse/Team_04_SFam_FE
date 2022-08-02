import { ReactNode } from 'react';
import { Heading } from '@components/Heading';
import { Navigator } from '@components/Navigator';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Heading />
    <main>{children}</main>
    <Navigator />
  </>
);

export default Layout;
