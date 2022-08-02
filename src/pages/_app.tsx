import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import { Layout } from '@components/Layout';

import globalStyles from '@styles/global';
import theme from '@styles/theme';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  </ThemeProvider>
);

export default App;
