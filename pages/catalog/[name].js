
import Body from "../../components/body"
import Content from "../../components/content"
import Image from "../../components/images"
import {Catalog} from "../../config"
import { useRouter } from 'next/router';

// const router = useRouter();



// console.log(router.query.name);
// console.log(post);

const Index = props => (
    
    <Body>
    <Content>
    <Image src={props.post.image}/>
    <div className="content_item">
      <h1> {props.post.title}</h1>
      <p>{props.post.description} </p>
      <p> ЦЕНА: {props.post.price}</p>
    </div>
      
    </Content>
    </Body>
)
Index.getInitialProps = async function(context) {
  const post = Catalog.find((item)=>{
    return item.link === context.query.name;
  })
  // console.log(post);
  return {
    post : post
  }

}

export default Index;
  