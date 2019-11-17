import Body from "../../components/Body";
import Content from "../../components/Content";
import Image from "../../components/Images";
import Catalog from "../../public/data/catalog/catalog.json";

const Index = props => {
  let image ="/" + props.item.image.split("/").splice(2, 3).join("/");

  return(
  <Body>
    <Content>
      <Image src={image} />
      <div className="content_item">
        <h1> {props.item.title}</h1>
        <p>{props.item.description} </p>
        <p> ЦЕНА: {props.item.price}</p>
      </div>
    </Content>
  </Body>
)};

Index.getInitialProps = async ({ query }) => {
  const item = Catalog.CatalogList.find(item => {
    return item.link === query.name;
  });
  return {
    item
  };
};
// Index.getInitialProps = ({ query }) => {
//   const item = Catalog.CatalogList.find((item)=>{
//     return item.link === query.name;
//   })
//   item.image = "/"+item.image.split("/").splice(2,3).join("/")
//   return {
//     item
//   }
// }

export default Index;
