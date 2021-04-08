import React from 'react';
// https://api.themoviedb.org/3/movie/550?api_key=06c8ab78088f4d84fe956c50120c7057

const images ="https://image.tmdb.org/t/p/w1280";

//if rating is above 7 then text displays green. above 5.5 orange and below 5.5 red
const setVoteClass = (vote) => {
    if(vote >= 7) {
        return 'green';
    }else if(vote >= 5.5) {
        return 'orange';
    }else{
        return 'red';
    }
}
//passes through props from App file
const Movie = ({ title, poster_path, overview, vote_average}) => (

    <div className="movie">
           {/* if theres no image found then display pulp fiction 404 */}
        <img src = {poster_path ? (images + poster_path) : 'https://cdn.dribbble.com/users/2353504/screenshots/7498453/media/6b9d2cecfe00f117222162cfd943e17d.gif'} alt = {title}/>
        <div className="movie-info">

            <h3>{title}</h3>

            <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
            </span>

        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie;