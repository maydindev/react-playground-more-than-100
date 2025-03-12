export default function SoundButtons({ clickHandlers }) {
  return (
    <div className='start-and-select-buttons-container'>
      <div className='select-button'>
        <button onClick={clickHandlers.turnOffSound}></button>
        <span>Seçiniz</span>
        <img src='./assets/images/icons/sound-off.svg' />
      </div>

      <div className='start-button'>
        <button onClick={clickHandlers.turnOnSound}></button>
        <span>Başlat</span>
        <img src='./assets/images/icons/sound-on.svg' />
      </div>
    </div>
  )
}
