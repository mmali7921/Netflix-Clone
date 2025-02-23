import React from 'react'
import { useState,useEffect } from 'react';
import axios from '../../axios';
import {API_KEY,imageUrl} from '../../constants/constants';
import './RowPost.css'
function RowPost() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        })
    }, [])
  return (
    <div className='row'>
        <h2>Trending</h2>
        <div className='posters'>
            {movies.map((obj) => {
                return(
                    <img className="poster" alt="poster" src={`${imageUrl+obj.backdrop_path}`} />
                )
            })}

        </div>
    </div>
  )
}

export default RowPost
