import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { darkPrimary, darkSecundary, lightPrimary, lightSecundary } from "../utils/Colors";
import logo from "./../images/NavbarLogo.png"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo to='/home'>
                <img src={logo} alt="not found" />
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>


            <Menu isOpen={isOpen}>
                <MenuLink to='/home' onClick={() => setIsOpen(!isOpen)}> HOME </MenuLink>
                <MenuLink to='/add' onClick={() => setIsOpen(!isOpen)}> NEW ACTIVITY </MenuLink>
            </Menu>
        </Nav>
    );
}

//Style section
const Nav = styled.div`
   display: flex; 
   position: fixed;
   z-index: 5;
   top: 0;
   width: 100%;
   padding: 0 2rem;
   height: 80px;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   background: ${lightPrimary};
`;


const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 2px;
        width: 25px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media(max-width: 768px){
        display: flex;
    }
`;

const MenuLink = styled(Link)`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: ${darkPrimary};
    transition: all 0.3s ease-in;
    font-size: 28px;
    &:hover{
        color: white;
        background: #219ebc;
        transition: 0.2ms ease;
    }
    @media(max-width: 768px){
        width: 100%;
        text-decoration: none;
        margin-top: 100px;
        &:focus, &:hover, &:visited, &:link, &:active {
         text-decoration: none;
        }
    } 
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative; 
    height: 90%;
    background: ${lightPrimary};
    @media(max-width: 768px){
        position: absolute;
        top:80px;
        left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
        width: 100%;
        height: 100vh;
        justify-content: flex-start;
        flex-direction: column;
        opacity: 0.95;
        transition:  0.3s ease-in;
        z-index: 4;
        /* overflow: hidden;
        flex-direction: column;
        width: 100%;  
        z-index: 1;
        max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
        transition: max-height 0.3s ease-in;         */
    }   
`;
const Logo = styled(Link)`
    margin: 0.8rem 0;
    text-decoration: none;
   
    /* font-weight: 800;
    font-size: 1.7rem;
    color: white; */
    /* span{
        font-weight: 300;
        font-size: 1.3rem;
    } */
`;

export default Navbar;