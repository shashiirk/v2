import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="title"
          content="Shashikanth Reddy - Frontend Developer based in India"
        />
        <meta
          name="description"
          content="Hello,  I'm Shashikanth Reddy.  A developer who loves building awesome looking web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shashi.vercel.app" />
        <meta
          property="og:title"
          content="Shashikanth Reddy - Frontend Developer based in India"
        />
        <meta
          property="og:description"
          content="Hello,  I'm Shashikanth Reddy.  A developer who loves building awesome looking web applications."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/48406108/160058749-383f1877-7096-4c34-9dcd-bb416e432492.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://shashi.vercel.app" />
        <meta
          name="twitter:title"
          content="Shashikanth Reddy - Frontend Developer based in India"
        />
        <meta
          name="twitter:description"
          content="Hello,  I'm Shashikanth Reddy.  A developer who loves building awesome looking web applications."
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/48406108/160058749-383f1877-7096-4c34-9dcd-bb416e432492.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="theme-color" content="ffffff" />
        <link
          href="https://api.fontshare.com/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
