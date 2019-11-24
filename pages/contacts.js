import Image from "../components/Images";
import Body from "../components/Body";
import Content from "../components/Content";
import { Component } from "react";

class Contacts extends Component {
  static async getInitialProps() {
    const data = await import("../content/pages/сontacts.md").catch(
      error => null
    );
    return { data };
  }
  render() {
    const body = this.props.data.html;
    const data = this.props.data.attributes;

    return (
      <Body>
        <Content>
          <Image src={data.image} />
          <div className="content_item">
            <h1> {data.title}</h1>
            <p>
              <a   href="https://www.instagram.com/marta_bra/">
                <img className="icon" alt="instagram" src="/img/instagram.png"/>
              </a>

              <a className="icon" href="https://vk.com/martabra">
                <img className="icon" alt="instagram" src="/img/vk.png" />
              </a>
            </p>

            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </Content>
      </Body>
    );
  }
}
export default Contacts;
