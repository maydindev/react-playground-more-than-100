import { useState, useEffect } from 'react'
import Bomb from './Bomb'

export default function GameScreen(props) {
  const {
    pookachu,
    bombProps,
    doorDestroyed,
    escaped,
    gameStarted,
    setGameStarted,
  } = props

  const moveOptions = [
    { step: '/move2' },
    { step: '/move3' },
    { step: '/move1' },
  ]

  const [currentMovement, setCurrentMovement] = useState(moveOptions[0])

  const type = pookachu.wantsToMove ? 'moving' : 'still'
  const direction = pookachu.direction

  const movement = pookachu.wantsToMove ? currentMovement.step : ''

  const image = `./assets/images/pookachu-sprites/${type}/${direction}${movement}.png`

  function getNextMove(currentMove) {
    const currentIndex = moveOptions.indexOf(currentMove)
    if (currentIndex < moveOptions.length - 1) {
      return moveOptions[currentIndex + 1]
    } else {
      return moveOptions[0]
    }
  }

  useEffect(() => {
    let interval
    let timeElapsed = 0

    if (pookachu.wantsToMove) {
      interval = setInterval(() => {
        setCurrentMovement((prev) => {
          return getNextMove(prev)
        })
      }, 60)
    }
    return () => clearInterval(interval)
  }, [pookachu.wantsToMove])

  let screenClass

  if (!gameStarted) {
    screenClass = undefined
  } else {
    screenClass = doorDestroyed ? 'door-destroyed' : 'door-intact'
  }

  return (
    <header>
      <h1>
        <span>P</span>ookémon
      </h1>
      <div className='game-screen-border'>
        <div className={`game-screen ${screenClass}`}>
          {escaped && <h3>Pookachu kaçtı</h3>}
          {!gameStarted && (
            <h3>Oyunu başlatmak için herhangi bir tuşa tıklayın</h3>
          )}
          {gameStarted && (
            <img
              style={{
                left: `${pookachu.xPosition}px`,
                top: `${pookachu.yPosition}px`,
                zIndex: 5,
              }}
              className={escaped ? 'escaped' : ''}
              src={image}
            />
          )}
          {bombProps.bomb.planted && (
            <Bomb
              bombData={bombProps.bomb}
              resetBomb={bombProps.resetBomb}
              checkDoor={bombProps.checkDoor}
            />
          )}
        </div>
      </div>
    </header>
  )
}
