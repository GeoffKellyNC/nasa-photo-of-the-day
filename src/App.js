import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';


import "./App.css";
import { BASE_URL_POD, API_KEY } from "./constants/index"


import Photo from "./components/Photo";
import Asteroid from "./components/Asteroid";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

const [imgURL, setImgUrl] = useState("")
const [imgInfo, setImgInfo] = useState("")

const StyledApp = styled.div`
  .app-header{
    text-align: center;
    color: white;
    margin: 10vh;
}

  .neo-tracker{
      text-align: center;
      color: white;
      margin: 10vh;
}

`


  useEffect(() => {
    axios.get(`${BASE_URL_POD}?api_key=${API_KEY}`)
      .then(res => {
        setImgUrl(res.data.url);
        setImgInfo(res.data.explanation);
        console.log(res.data)
      })
      .catch(err => console.log(err));
  },[])


  return (
    <StyledApp className="App">
    <Header />
     <h1 className = "app-header"> NASA Image of the Day!</h1>
     <Photo imgURL = { imgURL } imgInfo = { imgInfo }/>
     <h1 className = "neo-tracker"> NASA NEO Asteroid Tracker</h1>
     <Asteroid />
     <Footer />
    </StyledApp>
  );
}

export default App;
