import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../movieSlice'

export default function MovieInput() {
    const [newMovie, setMovie] = useState("")
    const dispatch = useDispatch()

    const handleAddMovie = (e) => {
        if(newMovie){
            dispatch(addMovie(newMovie))
            setMovie("")
        }
    }
  return (
    <div>
      <input type="text" value={newMovie} onChange={(e) => setMovie(e.target.value)}/>
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  )
}
