import styled from "styled-components";
import Image from "./Images";
import ListMenu from "./ListMenu";
import { TITLE } from "../config";
import Menu from "./Menu";
import { DEVICE } from '../config';
import Meta from "./Meta";
import { withRedux } from '../lib/redux'


const BodyContainer = styled.div`
h2,h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  color: #575757;
  font-size:1rem;
  font-weight: 300;
  text-align: center;
  }
  html {
    margin: 0;
	  padding: 0;
    height: 100%;
  }
  body,li {
    // margin: 0;
    height: 100%;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h2,a,p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    color: #9c9c9c;
  }
  .siteMenu ul {
    justify-content: center;
    list-style: none;
    display: flex;
    align-items: center;
    padding-left: 0;
  }
  .siteMenu li {
    padding: 1rem;
  }
  .catalog_image{
    width: 260px;
    padding-top:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${DEVICE.tablet}{
    .siteMenu{
      display:none;
    }
  }
  .content-body{
    padding-top: 60px;
    padding-bottom: 130px;
    height: 100%;
    /* background-color: rgb(251,251,251); */

  }
  .Footer{ 
    left:0;
    flex: 0 0 auto;
    bottom: 0;
    margin-top: 60px;
    width: 100%;
    height: 130px;
    text-align:center;
    background: rgba(226, 217, 220, 0.13);
    margin-bottom:0;
  .FooterInfo{
    padding-top:2rem;
  }
    /* p{
      color: #575757;
    } */

  }
`;

const Body = props => {

  return (
    <BodyContainer>
      <Meta/>
      <Menu/>

        <div className="content-body">
          <Image src="/img/logo_marta.jpg" />
          <h2> {TITLE.subtitle}</h2>
          <div className="siteMenu">
          <ListMenu className="titleMenu" />
          </div>
            {props.children}
        </div>
        <div className="Footer">
        <div className="FooterInfo">
        <p>Marta bra</p>
        <p>{new Date().getFullYear()}</p>
        </div>    
      </div>

      

    </BodyContainer>
  );
};


export default withRedux( Body);
