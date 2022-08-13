import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => (
  <Html>
    <title>운동 메이트가 필요할 땐 SFAM</title>
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
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${
          process.env.NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_KEY as string
        }&libraries=services,clusterer&autoload=false`}
        strategy='beforeInteractive'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
