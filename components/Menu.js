import React,{Component} from 'react'

import ToolBar from "./ToolBar";
import SideBar from "../components/SideMenu";

class Menu extends Component  {

    state ={
        SideBarOpened : false,
        visible: true,
        
    };
    componentDidMount() {
        // console.log('window.innerHeight', window.pageYOffset);
    }

    SideBarClickOpen = () => {
        this.setState((prevState)=>{
            return {
                SideBarOpened : !prevState.SideBarOpened 
            };
        });
    };
    SideBarClickClose = () =>{
        this.setState({
            SideBarOpened : false
        })
    }
    render(){
        let SideBarOpen = null;
        if (this.state.SideBarOpened){
            SideBarOpen = 
                        <SideBar SideBarClose={this.SideBarClickOpen} />
        }
        return (
        <>
        <ToolBar SideBarOpen={this.SideBarClickOpen}/>
        {SideBarOpen}
        </>
        )
    };
};

export default Menu;
