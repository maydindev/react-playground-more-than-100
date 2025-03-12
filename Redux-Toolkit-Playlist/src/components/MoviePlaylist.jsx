//import { useState } from 'react'
//import { createRandomMovie } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, removeMovie } from '../data/movieSlice'


function MoviePlaylist() {
  // Yapılacaklar:
  // Filmlerin listesini al
  //const moviePlaylist = []
  //const [moviePlaylist,setMoviePlaylist] = useState([])
  const moviePlaylist = useSelector((state) => state.movie.movieData)
  const dispatch = useDispatch()
  //console.log(moviePlaylist)

  /*
  const handleMovieAdd = (movie) => {
    // Yapılacaklar:
    // Listeye film ekle
    //moviePlaylist.push(movie)
    //console.log(moviePlaylist)

  }
  const handleMovieRemove = (movie) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
  }
  */


  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button onClick={() => dispatch(removeMovie(movie))/*handleMovieRemove()*/} className='button'>
          X
        </button>
      </li>
    )
  })
  
  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle'>Film Listesi</h3>
        <div className='buttons'>
          <button
            onClick={() => dispatch(addMovie())/*handleMovieAdd(createRandomMovie())*/}
            className='button'
          >
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  )
}

export default MoviePlaylist
