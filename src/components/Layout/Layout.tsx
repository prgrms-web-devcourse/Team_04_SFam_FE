import { ReactNode } from 'react';
import { Heading } from '@components/Heading';
import { Navigator } from '@components/Navigator';
import { Divider } from '@components/Divider';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Heading />
    <Divider />
    <main>{children}</main>
    <Navigator />
  </>
);

export default Layout;
