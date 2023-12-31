import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Genres(props) {
  const { genreIds = [], component } = props;

    const [genres, setGenres] = useState([])
    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${import.meta.env.VITE_APP_API_KEY}`)
        .then((res) => setGenres(res.data.genres))
        .catch((err) => console.log(err))
    }, []
    )

    return (
      <div className="genre-container">
       <p>Genres:&nbsp;</p>
      {component === "details"
        ? genreIds.map((genre, index) => (
            <p key={genre?.id}>
              {genre?.name}
              {index === genreIds.length - 1 ? "" : ","}&nbsp;
            </p>
          )) : genreIds.length && genreIds.map((id, index) => {
          for (let i = 0; i < genres.length; i++) {
            console.log(genres[i])
            if (genres[i].id === id) {
              return (
                <p key={id}>
                  {genres[i]?.name}
                {index === genreIds?.length -1 ? "" : ","}&nbsp;
                </p> 
              );
            }
          }
        })}
      </div>
    );
  }
