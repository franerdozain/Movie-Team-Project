import { useState } from 'react';
export default function GenresMenu({setSelectedGenre, selectedGenre, genres}) {
    
    const handleClick = event => {
        event === "All" ?
            setSelectedGenre(null) :
            setSelectedGenre(event)
    }

    return (
        <>
            <select className="form-select" multiple aria-label="multiple select example" size={5}>
                <option role='button' onClick={event => handleClick(event.target.innerText)}>All</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre} role='button' onClick={event => handleClick(event.target.innerText)}>{genre.name}</option>
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