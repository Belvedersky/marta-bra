import { DEVICE } from "../config";
import styled from "styled-components";

const DivContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    p,a{
        font-size: 1.1rem;
        color: black;
        text-decoration:none;
    }
    h1{
        font-size: 2rem; 
    }
    .icon{
        justify-content: center;
        align-items: center;
        max-height:35px;
        width:auto;
        padding:5px;
    }

    .catalog_image{
        margin: 5px;
        padding: 10px;
        padding-top: 50px;
        flex: 0 1 auto;
        height: auto;
        max-height: auto;
        max-width: 500px;
    }
    .content_item{
        margin: 5px;
        padding: 10px;
        padding-top: 50px;
        flex: 0 1 auto;
        padding-left: 1rem;
        max-width: 550px;
        

    }
    @media ${DEVICE.tablet} {
        padding-left: 3rem;
        padding-right: 3rem;
        margin:0;
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
        max-width:450px;
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
