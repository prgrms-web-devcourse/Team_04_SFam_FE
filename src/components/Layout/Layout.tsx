import { ReactNode } from 'react';

import { Navigator } from '@components/Navigator';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <main>{children}</main>
    <Navigator />
  </>
);

export default Layout;
