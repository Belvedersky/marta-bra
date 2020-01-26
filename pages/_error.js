import React from 'react';
import Error from 'next/error';
import Content from '../components/Content';
const Page = ({ errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Content>
      <img
        className="catalog_image"
        style={{
          width: '80%',
          height: 'auto'
        }}
        src="/img/404.svg"
        alt="404"
      />
      <p
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
         "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
         "Helvetica Neue", sans-serif`
        }}
        className="content_item"
      >
        <a href="/" style={{ fontSize: '2rem', color: '#EBD8DE' }}>
          {' '}
          Вернутся на главную
        </a>
      </p>
    </Content>
  );
};

export default Page;
