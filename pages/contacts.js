import Image from "../components/Images"
import Body from "../components/Body"
import Content from "../components/Content"
import {TITLE} from "../config"

    
const Index = () => (
    
    <Body>
    <Content>
    <Image src="/img/page_image_white.jpg"/>
      <div className="content_item">
      <h1> Контакты</h1>
      <p><a href="https://www.instagram.com/marta_bra/"> instagram</a></p>
      
      <p><a href="https://vk.com/martabraa"> vk</a></p>
      
      <p> {TITLE.about}
      </p>
      </div>
    </Content>
    </Body>
  );

export default Index;
  