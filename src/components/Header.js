import React from 'react';
import styled from 'styled-components';




const StyledHeader = styled.header`
    @import url('http://fonts.cdnfonts.com/css/nasa');
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        font-family: 'Nasa';
        border-bottom: 4px solid white;
        background-color: white;
        height: 3vh;

        .header h2 {
        font-size: 3rem;
        color: white;
        margin-top: 6%;
        }

        .header h5 {
        color: white;
        }

        .header-title{
        color: white;
        }

        nav{
        width: 100%;
        text-align: center;
        }

        nav a {
        text-decoration: none;
        color: black;
        margin: 5%;
        font-size: 1.4rem;
        font-family: 'Nasa';
}

`;


function Header (props) {
    return(
        <StyledHeader className="header">
        {/* <h2 className="header-title">Geoff's NASA API Project</h2>
        <h5>Built using NASA API</h5> */}
        <img src = "#" alt = "nasa Logo"/>
        <nav className="header-nav">
            <a href="#" className ="nav-home">Home</a>
            <a href="#" className ="nav-about">About</a>
            <a href="#" className ="nav-contact">Contact</a>
            <a href="https://api.nasa.gov/" target = "_blank" rel = "noopener noreferrer" className ="nav-API">NASA API</a>
        </nav>

    </StyledHeader>
    )
}

export default Header;