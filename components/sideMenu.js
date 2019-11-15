import styled from 'styled-components'
import ListMenu from './ListMenu'
const Side = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height:100%;
background: white;
box-shadow: 2px 0 8px rgba(0,0,0,0.5);
z-index:200;
display: block;
overflow: hidden;

scrollbar-width: none;
::-webkit-scrollbar {
    display: block;
}

.side_list ul{
    width:100%;
    height: 100%;
    justify-content: center;
    padding-top:50%;
    flex-direction: column;
    list-style: none;
    display: flex;
}
.side_list li{
    margin: 0.3rem;
}
.side_list a{
    font-size: 1.4rem;
    text-decoration: none;

}
a{
    cursor: pointer;
    color: grey;
}

`
const sideMenu = props => {
    return(
    <Side>
        <div className="side_list">
            
            <ListMenu style="sidebar">
            <li>
                <a onClick={props.SideBarClose} className="close">X</a>
            </li>

            </ListMenu>


        </div>
    </Side>
    )};
export default sideMenu;