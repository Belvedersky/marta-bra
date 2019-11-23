import Body from "../../components/Body";
import Content from "../../components/Content";
import React, { Component } from "react";

class Index extends Component {

  static async getInitialProps({ query }) {
    const path = query.name;
    const blog = await import(`../../content/blog/${path}.md`).catch(
      error => null
    );
    return { blog };
  }

  render() {

    if (!this.props.blog) {
      return (
        <Body>
          <Content>
          <div className="content_item">
          <h1>  Страница не найдена </h1>
          </div>

          </Content>
        </Body>
      );
    }
    const data = this.props.blog.default.attributes;
    console.log(data.photo)
    return (
      <Body>
        <Content>
          <div className="content_item">
            <h1> {data.title}</h1>
            <p>{data.description} </p>
            <p> {data.photo}</p>
          </div>
        </Content>
      </Body>
    );
  }
}

export default Index;
