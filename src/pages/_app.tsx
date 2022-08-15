import { Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { DeviceDetect } from '@components/DeviceDetect';
import { Layout } from '@components/Layout';
import globalStyles from '@styles/global';
import theme from '@styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <DeviceDetect>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DeviceDetect>
    </RecoilRoot>
  </ThemeProvider>
);

export default App;
