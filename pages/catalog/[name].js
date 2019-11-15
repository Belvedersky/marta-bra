
import Body from "../../components/Body"
import Content from "../../components/Content"
import Image from "../../components/Images"
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
  