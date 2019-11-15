import styled from "styled-components";
import Image from "../components/images";
import ListMenu from "./listMenu";
import { TITLE } from "../config";
import Menu from "./menu";
import { DEVICE } from '../config';
import Meta from "./meta";


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

  }
  .Footer{ 
    position: absolute;
    left:0;
    margin-top: 130px;
    width: 100%;
    height: 130px;
    text-align:center;
    /* background: #575757; */
    
    p{
      color: #575757;
    }

  }
`;

const Body = props => {

  return (
    <BodyContainer>
      <Meta/>
      <Menu/>

        <div className="content-body">
          <Image src="/img/bra.png" />
          <h2> {TITLE.subtitle}</h2>
          <div className="siteMenu">
          <ListMenu className="titleMenu" />
          </div>
            {props.children}
        </div>
        <div className="Footer">
        <p>Marta bra</p>
        <p>2019</p>        
      </div>

      

    </BodyContainer>
  );
};

export default Body;
