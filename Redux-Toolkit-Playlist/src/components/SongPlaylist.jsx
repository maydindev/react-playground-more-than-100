//import { createRandomSong } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import { addSong, removeSong } from '../data/songSlice'

function SongPlaylist() {
  // Yapılacaklar:
  // Şarkıların listesini al
  //const songPlaylist = []

  const songPlaylist = useSelector((state) => state.song.songData)
  const dispatch = useDispatch()

  /*
  const handleSongAdd = (song) => {
    // Yapılacaklar:
    // Listeye şarkı ekle
    songPlaylist.push(song)
  }
  const handleSongRemove = (song) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
    const index = songPlaylist.indexOf(song)
  }
  */

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => dispatch(removeSong(song))/*handleSongRemove(song)*/} className='button'>
          X
        </button>
      </li>
    )
  })

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle'>Şarkı Listesi</h3>
        <div className='buttons'>
          <button
            onClick={() => dispatch(addSong())/*handleSongAdd(createRandomSong())*/}
            className='button'
          >
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  )
}

export default SongPlaylist
