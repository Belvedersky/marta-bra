import Body from "../components/Body";
import { DEVICE } from "../config";
import Link from 'next/link';
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";
import Catalog from "../public/data/catalog.json"
const StyleCatalog = styled.div`
 text-align: center;
  .catalog-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1em;
    padding: 3rem;

  }
  .catalog_image {
    width: 100%;
    height: 100%;
    align-items: center;
    object-fit: cover;

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
  a{
    text-decoration:none;
  }
  
  @media ${DEVICE.tablet} {
        .siteMenu{
            display:none; 
        }
        .catalog-container{
          padding: 0
        }

  }
  @media ${DEVICE.laptop} {
    .catalog-container{
      padding: 4.5rem;
    }
  }
`;

const Index = () => (
  <Body>
    <StyleCatalog>

      <div className="catalog-container">
        {Catalog.map(item => (
          <div key={item.title}>

            <Link href="/catalog/[name]" as={`/catalog/${item.link}`}>
            <a>
            <ProgressiveImage src={item.image} placeholder={item.image}>
            {(src,loading) => (
              <img style={{ filter: loading ? "blur(2px)" : blur(0) }} src={src} className="catalog_image" alt={item.title} />
            )}
          </ProgressiveImage>
            <h1>{item.title}</h1>
            </a>
            </Link>
            <p>{item.price}₽ </p>
            
          </div>
        ))}
      </div>
    </StyleCatalog>
  </Body>
);

export default Index;
