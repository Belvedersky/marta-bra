import Head from 'next/head';
import { SEO } from '../config';

const Meta = () => (
    <Head>
      <meta name="theme-color" content="#050505"/>
      <meta name="msapplication-navbutton-color" content="#050505"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      
      <title key="title">{SEO.title}</title>
      
      <link href="/img/favicon.png" rel="icon" />
      <link rel="apple-touch-icon" href="/img/favicon.png"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />


      <meta
        key="description"
        name="description"
        content={SEO.description}
      />
      <meta
        key="og:type"
        name="og:type"
        content={SEO.openGraph.type}
      />
      <meta
        key="og:title"
        name="og:title"
        content={SEO.openGraph.title}
      />
      <meta
        key="og:description"
        name="og:description"
        content={SEO.openGraph.description}
      />
      <meta
        key="og:url"
        name="og:url"
        content={SEO.openGraph.url}
      />
      <meta
        key="og:image"
        name="og:image"
        content={SEO.openGraph.image}
      />
    </Head>
);

export default Meta;
