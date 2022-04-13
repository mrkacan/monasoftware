import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="font-Sora">
        <aside id="portal-model" className="relative z-[1999]"></aside>
        <aside id="portal-carrer" className="relative z-[1999]"></aside>
        <aside id="portal-contact" className="relative z-[1999]"></aside>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
