import Body from "../../components/Body";
import Content from "../../components/Content";
import Image from "../../components/Images";
import AddButton from "../../components/addButton"
import React, { Component } from "react";

class Index extends Component {

  static async getInitialProps({ query }) {
    const path = query.name;
    // console.log(path);
    const catalogItem = await import(`../../content/catalog/${path}.md`).catch(
      error => null
    );
    return { catalogItem };
  }

  render() {

    if (!this.props.catalogItem) {
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
    const data = this.props.catalogItem.default.attributes;
  
    return (
      <Body>
        <Content>
          <Image src={data.image} />
          <div className="content_item">
            <h1> {data.title}</h1>
            <p>{data.description} </p>
            <p> ЦЕНА: {data.price}</p>
          <AddButton data={data}/>
          </div>
        </Content>
      </Body>
    );
  }
}

export default Index;
