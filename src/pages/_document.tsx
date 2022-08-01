import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link
        rel='stylesheet'
        as='style'
        // crossOrigin
        href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
