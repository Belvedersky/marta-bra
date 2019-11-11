import styled from "styled-components";
import Image from "../components/images";
import ListMenu from "./listMenu";
import { TITLE } from "../config";
import Menu from "./menu"
import Meta from "./meta";

const Main = styled.div`
  padding-top: 60px;
`;
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
  height: 100%;
  > html {
    height: 100%;
  }
  > body,
  li {
    // margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  > h2,
  a,
  p {
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
`;

const Body = props => {

  return (
    <BodyContainer>
      <Meta/>
      <Menu/>
      <Main>
      <Image src="/img/bra.png" />
      <h2> {TITLE.subtitle}</h2>
      <div className="siteMenu">
        <ListMenu />
      </div>
        {props.children}
      </Main>
    </BodyContainer>
  );
};

export default Body;
