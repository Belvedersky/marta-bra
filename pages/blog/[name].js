import { Component } from "react";
import styled from "styled-components";
import Body from "../../components/Body";
import Content from "../../components/Content";
import Image from "../../components/Images";
import { DEVICE } from "../../config";


const Gallery = styled.div`
.content_item{
  max-width: 900px;
}
.Grid{
  display: table-row;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 10px;
  align-items: center;
}
.Grid img, .gallery {
  max-width: 40%;
  padding:2rem;

}
.textBlog{
  padding: 2rem;
}
@media ${DEVICE.tablet} {
  .Grid img, .gallery {
  max-width: 47%;
  padding:2px;
  

}
}
`

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
    const GalleryItem = data.photo.map(photo=>{
      return(<Image  style="gallery" src={photo}/>)
    });
    return (
      <Body>
      <Gallery>
        <Content>
          <div className="content_item">
            <h1> {data.title}</h1>
            <p className="textBlog">{data.description}</p>
            <div className="Grid" >
            {GalleryItem}
            </div>
          </div>
        </Content>
        </Gallery>
      </Body>
    );
  };
};

export default Index;
