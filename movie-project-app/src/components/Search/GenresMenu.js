import { useState } from 'react';
export default function GenresMenu({setSelectedGenre, selectedGenre, genres}) {
    
    const handleClick = genreClicked => {        
        setSelectedGenre(genreClicked)
    }

    return (
        <>
            <select className="form-select" multiple aria-label="multiple select example" size={5}>
                {genres.map(genre => (
                    <option key={genre.id} value={genre} onClick={event => handleClick(event.target.innerText)}>{genre.name}</option>
                ))
                }
            </select>
            {selectedGenre && (
                <span>{selectedGenre}</span>
            )
            }
        </>
    )
}