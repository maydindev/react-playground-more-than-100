export default function ScoreBoard({ data }) {
  return (
    <div className='scoreboard'>
      <div className='timer'>
        <div className='display-value'>{data.timeLeft}</div>
        <div>Zaman</div>
      </div>
      <div className='title'>
        Uzay <br /> Savaşçısı
      </div>
      <div className='score'>
        <div className='display-value'>{data.score}</div>
        <div>Skor</div>
      </div>
    </div>
  )
}
