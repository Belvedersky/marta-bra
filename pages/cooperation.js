import Image from "../components/Images";
import Body from "../components/Body";
import Content from "../components/Content";
import Form from "../components/CooperationForm"
import styled from "styled-components";
import { Component } from "react";
const CooperationContent = styled.div`
  input,textarea,.error{
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
    height: 5rem;
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


class Cooperation extends Component {
  static async getInitialProps({ query }) {
    const path = query.name;
    const data = await import('../../content/pages/cooperation.json').catch(
      error => null
    );
    return { data };
  }
  
  render() {
    return(
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
          <Form/>
          </CooperationContent>
        </div>
      </Content>
    </Body>
    )
  }
};

export default Cooperation;
