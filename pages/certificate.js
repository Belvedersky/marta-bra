import Image from '../components/Images';
import Body from '../components/Body';
import Content from '../components/Content';
// import Page from '../public/data/index.json';
import { Component } from 'react';


class Contacts extends Component {
  static async getInitialProps() {
    const data = await import('../content/pages/certificate.json').catch(
      error => null
    );
    return { data };
  }
  render() {
    console.log(this.props.data);
    const body = this.props.data.body;
    const data = this.props.data;

    return (
      <Body>
        <Content>
          <Image src={data.image} />
          <div className="content_item">
            <h1> {data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </Content>
      </Body>
    );
  }
}
export default Contacts;


// const Certificate = () => (
//   <Body>
//     <Content>
//       <div className="content_item">
//         <h1>Cертификат</h1>
//         <p>{Page.certificate}</p>
//       </div>
//       <Image src="/img/certificate.png" />
//     </Content>
//   </Body>
// );

// export default Certificate;
