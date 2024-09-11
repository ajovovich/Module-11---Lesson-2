

import React, { useState } from 'react';


//Task 1: Initializing and Displaying a List
const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Deadpool', genre: 'Action', description: 'A merc with a mouth breaking the 4th wall.', showDetails: false },
        { title: 'The Godfather', genre: 'Crime', description: 'A classic mafia drama.', showDetails: false },
        { title: 'Toy Story', genre: 'Animation', description: 'A story about the secret life of toys.', showDetails: false },
    ]);

    const [showAll, setShowAll] = useState(true);


//Task 2: Conditional Rendering of Movie Details    
    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };


//Task 3: Implementing Movie Removal    
    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

//Task 4: Toggling List View    
    const toggleView = () => {
        setShowAll(!showAll);
    };

    const filteredMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleView}>
                {showAll ? 'Show Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
