import styled from "styled-components";
import { DEVICE } from '../config';
import ListMenu from '../components/ListMenu'
import Cookies from 'js-cookie'
import { parseCookies } from 'nookies'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const ToolBar = props => {
  // let Order = null
  //   useEffect(() => {
  //   // Обновляем заголовок документа, используя API браузера
  //   Order = new Map( JSON.parse(Cookies.get("Order") || null))
  //   console.log(Order.size)
  // });
  const ShowCart = () => {
    // <p>{OrderList.size} </p>
    let OrderList = new Map( JSON.parse(Cookies.get("Order") || null))
    
    if(OrderList.size){

    return(
      <Link href="/cart">
      <a className="shoppingCard" href="/">
      <img
          className="bra_catalog"
          src="/img/shopping-bag.png"
      />
      </a>
      </Link>

    )
    }
    else return (null);
  }
  const OnAddtoCard=()=>{

  }
  const Menu = styled.div`
    position: fixed;
    background: black;
    color: white;
    width: 100%;
    height: 70px;
    top: 0%;
    left: 0%;

    .flex {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 1rem;
    }

    .logo {
      padding-top: 1.5rem;
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      padding-left:1rem;
    }
    .space {
      flex: 2;
    }

    .menu{
        padding-top:1rem;
        display:flex;
        width:40px;
        height:'auto';
        filter: invert(100%);
        cursor: pointer;
    }
    .bra_menu{
        padding-top:1rem;
        display: flex;
        width: 60px; 
        filter: invert(100%);
        margin: 0;
        padding: 0 1rem;
    }
    .bra_catalog{
        padding-top:1rem;
        display: flex;
        width: 30px;
        height:auto; 
        filter: invert(100%);
        margin: 0;
       
        
    
    }
    .shoppingCard{
      text-decoration: none;
    }
    
    .list ul {
      
      margin: 0;
      padding: 0;
      padding-top: 25px;
      display: flex;
      
    }
    .list a{
      text-decoration:none;
    }

    .list li {
   
      padding: 0 1rem;
      list-style: none;
    }

    .list li:hover {
      color: gray;
    }

    @media ${DEVICE.laptop} {
        .bra_menu{
            display:none;
        }
        .menu{
            display:none;
        }
        
    }
    @media ${DEVICE.tablet}{
      overflow: hidden;
      height: 55px;
        .menu{
          width:30px;
        }
        .list {
            display:none;
        }
       .logo{
           display:none
       }
    }
    
  `;


  return (
    <Menu>
      <nav>
        <div className="flex">
        
        <img
            onClick={props.SideBarOpen}
            className="menu"
            src="/menu.svg"
            alt="menu"
        />
          <a className="logo" href="/">
            MARTA BRA
          </a>
         
          <div className="space" />

          <div className="list">
          
          <ListMenu styled="toolbar"/>

          </div>

         <ShowCart/>
         
         {Order}
        </div>
      </nav>
    </Menu>
  );
};

export default ToolBar;
