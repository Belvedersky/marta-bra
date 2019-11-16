import Image from "../components/Images"
import Body from "../components/Body"
import Content from "../components/Content"
import Page  from "../public/data/index.json"


    
const Index = () => (
    
    <Body>
    <Content>
    <div className="content_item">
    <h1>Cертификат</h1>
    <p>{Page.certificate}</p>
    </div>
    <Image src="/img/certificate.png"/>

    </Content>
    </Body>
  );

export default Index;
  