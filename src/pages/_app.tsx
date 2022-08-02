import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import globalStyles from '@styles/global';
import theme from '@styles/theme';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </ThemeProvider>
);

export default App;
