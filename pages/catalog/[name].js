import Body from "../../components/Body";
import Content from "../../components/Content";
import Image from "../../components/Images";

import React, { Component } from 'react';

class Index extends Component {
  
  static async getInitialProps({ query }) {
    const path  = query.name;
    console.log(path)
    const catalogItem = await import(`../../content/catalog/${path}.md`).catch(error => null);
    return {catalogItem}
  }
  // let image = "/" + item.image.split("/").splice(2, 3).join("/");

  render(){
  if (!this.props.catalogItem) return <div>not found</div>;
  const data = this.props.catalogItem.default.attributes
    // const image = "/" + this.props.item.image.split("/").splice(2, 3).join("/");
  return(
  <Body>
    <Content>
      <Image src={data.image} />
      <div className="content_item">
        <h1> {data.title}</h1>
        <p>{data.description} </p>
        <p> ЦЕНА: {data.price}</p>
      </div>
    </Content>
  </Body>
  )
  };
};

// Index.getInitialProps = async ({ query }) => {
//   const item = Catalog.CatalogList.find(item => {
//     return item.link === query.name;
//   });
//   return {
//     item
//   };
// };


export default Index;
