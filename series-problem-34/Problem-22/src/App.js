import { useRef,useState } from 'react'

export default function VideoPlayer() {
  const [playingDesc,setPlayingDesc] = useState("")
  const ref = useRef(null)

  console.log(ref.current)

  const handlePlay = () => {
    ref.current.play()
    setPlayingDesc("Oynatılıyor")
  }

  const handlePause = () => {
    ref.current.pause()
    setPlayingDesc("Duraklatıldı")
  }

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video ref={ref}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
        <button onClick={handlePause} className='text-orange-500 font-semibold'>Duraklat</button>
        <div>{playingDesc}</div>
        <button onClick={handlePlay} className='text-indigo-500 font-semibold'>Oynat</button>
      </div>
    </div>
  )
}
