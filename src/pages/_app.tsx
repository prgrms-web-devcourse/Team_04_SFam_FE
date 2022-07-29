import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import globalStyles from '@styles/global';
import theme from '@styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
