import { DEVICE } from "../config";
import styled from "styled-components";

const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
    padding-left: 12rem;
    padding-right: 12rem;
    padding-top: 4rem;
    p,a{
        font-size: 1.1rem;
        color: black;
        text-decoration:none;
    }
    h1{
        font-size: 2rem; 
    }
    .catalog_image{
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
        width: 360px;
        height: auto;
        max-height: 400px;
    }
    .content_item{
        order: 0;
        flex: 2 1 auto;
        align-self: auto;
        padding-left: 3rem;
        max-width: 550px;

    }
    @media ${DEVICE.tablet} {
        padding: 3rem;
        padding-left: 2rem;
        padding-right: 3rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: stretch;
        align-items: center;
        .catalog_image{
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
    }
    .content_item{
        order: 0;
        flex: 2 1 auto;
        align-self: auto;
        padding-left:0;
    }

  }
`
const ContentPage = props => {
    return(
    <DivContent>
    {props.children}
    </DivContent>
    )
}

export default ContentPage;