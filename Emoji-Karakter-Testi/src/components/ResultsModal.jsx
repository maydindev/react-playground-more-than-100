export default function ResultsModal(props) {
  const message = !props.resultsReady ? (
    <div className='modal-inner-container'>
      <img src='./images/gear.svg' /> <p>Sonuçların Hesaplanması</p>{' '}
    </div>
  ) : (
    <div className='modal-inner-container'>
      <ul className='bounce-top'>
        {props.likedEmojis.map(props.generateListItems)}
      </ul>
      <p>
        Kişiliğin: <span>harika</span>
      </p>
      <button className='try-again-button' onClick={props.reset}>
        Tekrar Deneyin
      </button>
    </div>
  )

  if (props.likedEmojis.length >= 10) {
    return (
      <div className='results-modal-container'>
        {!props.showResults ? (
          <div className='modal-inner-container'>
            <button className='get-results-button' onClick={props.getResults}>
              Sonuçlara Ulaşın
            </button>
          </div>
        ) : (
          message
        )}
      </div>
    )
  } else {
    return null
  }
}
