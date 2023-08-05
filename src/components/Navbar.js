import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';
import { useState, useEffect } from 'react';
import './Navbar.css'
const Nav= styled.nav`
height:65px;
display:flex;
justify-content:space-between;
padding: 0rem 2rem;
z-index:100;
position:fixed;
width:100%;
transition: background-color 0.5s ease;
`;
const NavLink =css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
font-style:bold;
font-size:20px;
&:hover{
  font-size:21px;
}
`;

const Logo=styled(Link)`
${NavLink}
font-style:italic;
`;
const MenuBars=styled.i`
display:none;

@media screen and (max-width:768px){
    display:block;
    background-image:url(${Bars});
    background-size:contain;
    height:40px;
    width:40px;
    cursor:pointer;
  
    top:0;
    right:0;
    transform:translate(-100%, -16%)
}
`;
const NavMenu=styled.div`
display:flex;
align-items:center;
margin-right:-48px;


@media screen and (max-width:768px){
    display:none;
}
`;
const NavMenuLinks =styled(Link)`
${NavLink}
`;
const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:45px;

@media screen and (max-width:768px){
    display:none;
}
`;
const Navbar = () => {
    const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavbarClass('scrolled');
    } else {
      setNavbarClass('');
    }
  };

  return (
    <Nav className={`navbar ${navbarClass}`}>
        <Logo>SuperSTOCK</Logo>
        <MenuBars/>
        <NavMenu>
            {
                menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))
            }
        </NavMenu>
        <NavBtn >
            <Button to="/contact" primary='true' className={`navbar ${navbarClass}`}> Connexion</Button>
        </NavBtn>
    </Nav>
  );
}

export default Navbar
