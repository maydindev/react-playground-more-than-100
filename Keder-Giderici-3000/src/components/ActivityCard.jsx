export default function ActivityCard({
  number,
  activity,
  type,
  participants,
  price,
  accessibility,
}) {
  return (
    <div className='activity-card'>
      <div className='inner-card-container'>
        <div className='frontSide'>
          <p className='title'>Seçenek {number}</p>
        </div>
        <div className='backSide'>
          <p className='activity'>{activity}</p>
          <div className='stats-container'>
            <p>
              <span>Tür:</span> {type}{' '}
            </p>
            <p>
              <span>Katılımcılar:</span> {participants}{' '}
            </p>
            <p>
              <span>Erişilebilirlik:</span> {accessibility * 100}{' '}
            </p>
            <p>
              <span>Fiyat:</span> {(price * 100).toFixed(0)}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
