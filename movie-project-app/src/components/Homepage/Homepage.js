import React from 'react';
import CardComponent from './CardComponent';



function Homepage() {
    const upcomingMovies = [
            {
              "adult": false,
              "backdrop_path": "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
              "genre_ids": [
                16,
                35,
                10751,
                14,
                10749
              ],
              "id": 976573,
              "original_language": "en",
              "original_title": "Elemental",
              "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
              "popularity": 1050.704,
              "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
              "release_date": "2023-06-14",
              "title": "Elemental",
              "video": false,
              "vote_average": 7.5,
              "vote_count": 410
            },
            
            {
              "adult": false,
              "backdrop_path": "/yuikh0iVJxnA9RsrNiDfjez2j1T.jpg",
              "genre_ids": [
                35,
                12,
                14
              ],
              "id": 346698,
              "original_language": "en",
              "original_title": "Barbie",
              "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
              "popularity": 836.072,
              "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
              "release_date": "2023-07-19",
              "title": "Barbie",
              "video": false,
              "vote_average": 0,
              "vote_count": 0
            }
      ];
    
      const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
        <div>
            COMING SOON
        </div>
        <main id="main" className="col-md">
            
            {upcomingMovies.map((item) => (
            <CardComponent
              id={item.id}
              image={IMG_URL + item.poster_path}
              title={item.title}
              score={item.vote_average}
              overview={item.overview}
              type={"movie"}
            />
          ))}
          </main>
    
    </>
   
  );
}

export default Homepage;