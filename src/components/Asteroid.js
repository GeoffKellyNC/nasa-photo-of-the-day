import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL_AST, API_KEY, TODAY} from "../constants/index";
import styled from 'styled-components'


function Asteroid (props) {

    const [asteroids, setAsteroids] = useState([]);
    
    useEffect(() => {
        axios.get(`${ BASE_URL_AST }&api_key=${ API_KEY }`)
            .then(res => {
                setAsteroids(res.data.near_earth_objects[TODAY])

            })
            .catch(error => console.log(error));
    },[])

    console.log(asteroids)

    const StyledAsteroids = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 

        .asteroid-container{
        border: 3px solid #4CB43B;
        margin: 2%;
        width: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        } 

        h1{
            font-family: 'Nasa';
}

        h5{
            font-family: 'Nasa';
            font-size: 1.4rem;
            color: #3a86ff;
            margin: 2%;
        }

        span{
            font-size: 1.2rem;
            color: white;
        }


        h4 {
            color: #3a86ff;
            margin: 2%;
            font-family: 'Nasa';
}
    
    `

    
    return(
        <StyledAsteroids className = "asteroids">
            {
                asteroids.map((obj) => {
                   return (
                       <div className = "asteroid-container">
                            <h5 className = "name-text"> Name:</h5>
                            <span className = "asteroid-name" key = {obj.id}> {obj.name}</span>
                            <h5 className = "asteroid-size"> {
                                obj.estimated_diameter.miles.estimated_diameter_max < 1 ? 'Estimated Size (Feet): ': 'Estimated Size (Miles)'
                            }</h5>
                            <span key = {obj.id}>{
                                obj.estimated_diameter.miles.estimated_diameter_max < 1 ? obj.estimated_diameter.feet.estimated_diameter_max.toFixed(2) : obj.estimated_diameter.miles.estimated_diameter_max.toFixed(2)
                            }</span>
                            <h5 className = "danger-text"> Danger to Earth:</h5>
                            <span className = "asteroid-danger" key = {obj.id}>{
                                obj.is_potentially_hazardous_asteroid ? "Danger!": "No Danger"
                            }</span>
                            <h5 className = "speed-text"> Astroid Speed: </h5>
                            <span className = "asteroid-speed" key = {obj.id}>{
                                Math.round(obj.close_approach_data[0].relative_velocity.miles_per_hour) + ' MPH'
                            }</span>
                            <h5 className = "approach-date-text"> Close Approach Date </h5>
                            <span className = "approach-date" key = {obj.id}>{obj.close_approach_data[0].close_approach_date_full} </span>
                            <h5 className = "miss-text"> Miss Earth Distance (Miles):</h5>
                            <span className = "miss-distance" key = {obj.id}>{
                                Math.round(obj.close_approach_data[0].miss_distance.miles)
                            } </span>
                       </div>
                       )
                })
            }
        </StyledAsteroids>
    )
}

export default Asteroid