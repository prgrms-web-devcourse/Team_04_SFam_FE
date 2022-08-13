import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Layout } from '@components/Layout';
import { MobileLayout } from '@styles/common';
import globalStyles from '@styles/global';
import theme from '@styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <MobileLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MobileLayout>
    </RecoilRoot>
  </ThemeProvider>
);

export default App;
