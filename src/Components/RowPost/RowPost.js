import React from 'react'
import { useState,useEffect } from 'react';
import axios from '../../axios';
import {imageUrl} from '../../constants/constants';
import './RowPost.css'
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        })
    }, [props.url])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj) => {
                return(
                    <img className={props.isSmall ? "smallPoster":"poster"} alt="poster" src={`${imageUrl+obj.poster_path}`} />
                )
            })}

        </div>
    </div>
  )
}

export default RowPost
