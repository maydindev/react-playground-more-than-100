import MoviePlaylist from './components/MoviePlaylist'
import SongPlaylist from './components/SongPlaylist'
import { useDispatch } from 'react-redux'
import { resetMovie } from './data/movieSlice'
import { resetSong } from './data/songSlice'

export default function App() {
  const dispatch = useDispatch()

  
  const handleResetClick = () => {
    dispatch(resetMovie())
    dispatch(resetSong())
  }
  

  return (
    <div className='container'>
      <button onClick={() => handleResetClick()} className='button'>
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}
