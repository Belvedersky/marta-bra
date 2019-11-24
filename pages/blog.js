import Body from "../components/Body";
import React from "react";
import Link from "next/link";
import Content from "../components/Content";
import Image from "../components/Images";

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

class Blog extends React.Component {
  static async getInitialProps() {
    const Blog = await importBlog();
    return { Blog };
  }
  render() {
    const { Blog } = this.props;
    // console.log(Blog[0].attributes.description.split(" ").length)
    return (
      <Body>
        {Blog.map(item => {
          return (
            <div key={item.attributes.title}>
              <Content>
              <Link href="/blog/[name]" as={`/blog/${item.name}`}>
              <a>
                <Image src={item.attributes.image} />
              </a>
              </Link>
                <div className="content_item">
                  <Link href="/blog/[name]" as={`/blog/${item.name}`}>
                    <a>
                      <h1>{item.attributes.title}</h1>
                    </a>
                  </Link>
                  <p>
                  {item.attributes.description.split(" ").length < 50  &&
                  item.attributes.description
                  ||
                  item.attributes.description.substring(0,item.attributes.description.length / 2.5) + "..."
                  }
                    
                  </p>
                </div>
              </Content>
            </div>
          );
        })}
      </Body>
    );
  }
}

export default Blog;
