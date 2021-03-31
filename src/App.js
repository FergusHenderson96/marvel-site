import React, {useEffect, useState} from 'react';

import Movie from './components/Movie';
//https://api.themoviedb.org/3/movie/550?api_key=06c8ab78088f4d84fe956c50120c7057

const featured ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=06c8ab78088f4d84fe956c50120c7057&page=1";
const images ="https://imagei.tmdb.org/t/p/w1280";
const search ="https://api.themoviedb.org/3/search/movie?api_key=06c8ab78088f4d84fe956c50120c7057&query=";

function App () {
    const [ movies, setMovies] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(featured)
    },[]);

    const getMovies = (API) => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if  (searchTerm){
        getMovies(search+searchTerm)
        setSearchTerm("");
    }
    };

    const handleOnChange = (e) => {
       setSearchTerm(e.target.value);
    };

    return (
    <>
        <header>
            <h3></h3>
            <form onSubmit={handleOnSubmit}>
            <input className="search"
                   type="search" 
                   placeholder="Search..."
                   value={searchTerm}
                   onChange={handleOnChange}/> 
            </form>
        </header>
        <div className="movie-container">
        {movies.length > 0 && movies.map((movie) =><Movie key={movie.id} {...movie}/>)}
        </div>
    </>
);
}

    export default App;