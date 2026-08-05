import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Seco Bio - Keeping living organisms alive through protective formulations powered by AI and robotics." />
        <meta name="theme-color" content="#3B60E4" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <body>
        {/* Build-time form detection for Netlify. Never visible; the real form
            is the React modal, which POSTs to this same form-name. */}
        <form name="seco-contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="form-name" value="seco-contact" readOnly />
          <input type="text" name="bot-field" />
          <input type="text" name="type" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
