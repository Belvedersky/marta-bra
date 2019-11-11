import Image from "../components/images";
import Body from "../components/body";
import Content from "../components/content"
import { DEVICE } from "../config";
import styled from "styled-components";

const CooperationContent = styled.div`

  input,textarea{
    font-size: 16px;
    padding: 14px 3%;
    display: block;
    background: none;
    border: none;
    background: #f3f3f3;
    outline: none;
    width: 100%;
  }
  textarea{
    margin-top:1rem;
    height: 6rem;
    resize: none;
  }
  button{
  font-size: 16px;
  color: #fff;
  font-family: 'SourceSansPro-SemiBold', Arial, Helvetica, sans-serif;
  height: 38px;
  padding: 0 40px;
  display: inline-block;
  border: none;
  background: rgb(51,54,73);
  text-align: center;
  outline: none;
  margin-top: 2rem;
  }


`;

const Cooperation = () => (
  <Body>
    <Content>
      <Image src="/img/page_image_black.jpg" />
      
      <div className="content_item">
      <CooperationContent>
        <h1> Сотрудничество</h1>
        <p>
          Мы открыты к сотрудничеству с моделями, стилистами, фотографами,
          шоурумами и рады выслушать все ваши предложения. Чтобы связаться с
          нами, заполните контактные данные и подробно расскажите о вашем
          предложении.
        </p>
        <p> Почта:</p>

        <input />
        <p> Cooбщение:</p>
        <textarea />
        <button> Отправить</button>
        </CooperationContent>
      </div>
    </Content>
  </Body>
);

export default Cooperation;
