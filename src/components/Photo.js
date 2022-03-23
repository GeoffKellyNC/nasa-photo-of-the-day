import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const StyledPhoto = styled.div`
    @import url('http://fonts.cdnfonts.com/css/nasa'); 
    text-align: center;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 2%;

    .nasa-img{
        height: 35%;
        width: 35%;
    }
    
    .imgInfo{
        color: white;
        font-family: sans-serifs;
        font-size: 1.2rem;
        margin: 2%;
}

`

function Photo (props){

    
    return(
        <StyledPhoto className = "nasa-img, container">
            {/* <iframe 
                title = "Embedded Video"
                width = "800"
                height = "500"
                src = { props.imgURL }
            /> */}
            <p className = "imgInfo"> {props.imgInfo}</p>
            <img src={props.imgURL} className ="nasa-img" alt = "Embedded Video"></img>
        </StyledPhoto>
    )
}

export default Photo