import Body from "../components/Body";
import { DEVICE } from "../config";
import React from "react";
import Link from "next/link";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";

const importBlog = async () => {
  const markdownFiles = require
    .context("../content/blog/", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/blog/${path}`);
      return { ...markdown, name: path.substring(0, path.length - 3) };
    })
  );
};

const StyleCatalog = styled.div`
  text-align: center;
  .catalog-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1em;
    padding: 3rem;
  }
  .catalog_image {
    width: 100%;
    height: 100%;
    align-items: center;
    object-fit: cover;
  }
  .siteMenu ul {
    justify-content: center;
    list-style: none;
    display: flex;
    align-items: center;
    padding-left: 0;
  }
  .siteMenu li {
    padding: 1rem;
  }
  .catalog_image {
    width: 260px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    text-decoration: none;
  }

  @media ${DEVICE.tablet} {
    .siteMenu {
      display: none;
    }
    .catalog-container {
      padding: 0;
    }
  }
  @media ${DEVICE.laptop} {
    .catalog-container {
      padding: 4.5rem;
    }
  }
`;

class Blog extends React.Component {
  // const {catalogList} = props.catalogList;
  static async getInitialProps() {
    const Blog = await importBlog();
    return { Blog };
  }
  // console.log(catalogList)
  render() {
    const { Blog } = this.props;

    return (
      <Body>
        <StyleCatalog>
          <div className="catalog-container">
            {Blog.map(item => {
              return (
                <div key={item.attributes.title}>
                  <Link href="/blog/[name]" as={`/blog/${item.name}`}>
                    <a>
                      <ProgressiveImage
                        src={item.attributes.photo[0]}
                        placeholder={item.attributes.photo[0]}
                      >
                        {(src, loading) => (
                          <img
                            style={{ filter: loading ? "blur(2px)" : blur(0) }}
                            src={src}
                            className="catalog_image"
                            alt={item.attributes.title}
                          />
                        )}
                      </ProgressiveImage>
                      <h1>{item.attributes.title}</h1>
                    </a>
                  </Link>
                  <p>{item.attributes.description}</p>
                </div>
              );
            })}
          </div>
        </StyleCatalog>
      </Body>
    );
  }
}

export default Blog;