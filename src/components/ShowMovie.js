import React from 'react';
import Fade from "react-reveal/Fade";

const ShowMovie = ({ movieInfo}) => {
  const addDefault = (e) => {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  }

  let {
    Title, 
    Year, 
    Rated, 
    Runtime, 
    Genre,
    Poster, 
    Director,
    Writer,
    Actors,
    Plot,
    imdbRating,
    BoxOffice,
    Production
  } = movieInfo;
  return (
         <Fade>
         <div className="jumbotron">
          <div className="container">
            <div className="grid">
              <div className="grid__image">
              <img src={Poster} alt={Title} onError={addDefault} />
            </div>
            <div className="grid__content">
              <h3>{Title} ({Year})</h3>
              <p><b>IMDb Rating:</b> {imdbRating}</p>
              <p><b>Runtime:</b> {Runtime}</p>
              <p><b>Genre:</b> {Genre}</p>
              <p><b>Rated:</b> {Rated}</p>
              <p><b>Director:</b> {Director}</p>
              <p><b>Writer:</b> {Writer}</p>
              <p><b>Box Office:</b> {BoxOffice}</p>
              <p><b>Production:</b> {Production}</p>
              
              
            </div>
              <p className='grid__overview'><b>Overiew:</b> {Plot}</p>
            </div>
            
          </div>
          <button  className="view-similar-button">View Similar Movies</button>
          
        </div> 

       
        </Fade>


    

    
  );
}

export default ShowMovie;