import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nasa';
    border-top: 4px solid white;
    height: 20vh;  
    background-color: white;

    nav a{
        text-decoration: none;
        color: black;
    }
`


function Footer (props){
    return(
        <StyledFooter className = "footer">
        <nav className="footer-nav">
            <a href="#" className ="nav-home">Home</a>
            <a href="#" className ="nav-about">About</a>
            <a href="#" className ="nav-contact">Contact</a>
            <a href="https://api.nasa.gov/" target = "_blank" rel = "noopener noreferrer" className ="nav-API">NASA API</a>
        </nav>
        </StyledFooter>
    )
}

export default Footer;