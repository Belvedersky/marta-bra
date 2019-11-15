import Image from "../components/Images"
import Body from "../components/Body"
import Content from "../components/Content"


    
const Index = () => (
    
    <Body>
    <Content>
    <div className="content_item">
    <h1> Cертификат</h1>
    <p>Чтобы не прогадать с размером или выбором комплекта,
    мы предлагаем подарочный сертификат. Номинал сертификата
    и срок действия не ограничен. Им можно воспользоваться на
    сайте или в нашем шоу руме. Мы можем доставить сертификат вам
    или получателю в день заказа по Москве и Московской области, а
    так же отправить его в электронном виде в любую точку мира.  
    Для заказа позвоните или напишите нам.</p>
    </div>
    <Image src="/img/certificate.png"/>

    </Content>
    </Body>
  );

export default Index;
  