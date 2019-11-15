
import Body from "../../components/body"
import Content from "../../components/content"
import Image from "../../components/images"
import {Catalog} from "../../config"



const Index = ({item}) => {

  return(
        <Body>
          <Content>
            <Image src={item.image}/>
            <div className="content_item">
              <h1> {item.title}</h1>
              <p>{item.description} </p>
              <p> ЦЕНА: {item.price}</p>
            </div>
          </Content>
        </Body>
      )
    }

Index.getInitialProps = ({ query }) => {
  const item = Catalog.find((item)=>{
    return item.link === query.name;
  })
  return {
    item
  }
}

export default Index;
  