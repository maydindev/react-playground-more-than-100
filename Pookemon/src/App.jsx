import { useState, useEffect } from 'react'
import GameScreen from './components/GameScreen'
import ActionButton from './components/ActionButton'
import NavButtons from './components/NavButtons'
import SoundButtons from './components/SoundButtons'
import Controls from './components/Controls'
import useSound from 'use-sound'
import './styles.css'
export default function App() {
  const prisonBoundaries = {
    xAxis: {
      min: 10,
      max: 190,
    },
    yAxis: {
      min: 10,
      max: 185,
    },
  }

  const escapedBoundaries = {
    xAxis: {
      min: undefined,
      max: undefined,
    },
    yAxis: {
      min: 10,
      max: undefined,
    },
  }

  const INITIAL_BOMB = {
    planted: false,
    activated: false,
    xPosition: undefined,
    yPosition: undefined,
  }

  const [gameStarted, setGameStarted] = useState(false)
  const [soundOn, setSoundOn] = useState(true)
  const [doorDestroyed, setdoorDestroyed] = useState(false)
  const [escaped, setEscaped] = useState(false)
  const [footStepCount, setFootStepCount] = useState(0)
  const [actionsButtons, setActionButtons] = useState({
    aButtonDown: false,
    bButtonDown: false,
  })
  const [bomb, setBomb] = useState({ ...INITIAL_BOMB })
  const [pookachu, setPookachu] = useState({
    xPosition: 108,
    yPosition: 100,
    direction: 'down',
    wantsToMove: false,
  })

  const [boundaries, setBoundaries] = useState(prisonBoundaries)

  const soundPath = './assets/audio/sound-effects'
  const [bombsAway] = useSound(`${soundPath}/bombsAway.mp3`, { volume: 0.5 })
  const [crash] = useSound(`${soundPath}/crash.mp3`)
  const [boink] = useSound(`${soundPath}/boink.mp3`, { volume: 0.05 })
  const [footSteps] = useSound(`${soundPath}/footSteps.mp3`, { volume: 0.1 })

  const [prisonMusic, { pause: pausePrisonMusic }] = useSound(
    './assets/audio/music/PrisonMusic.mp3',
    { volume: 0.07 }
  )

  const [freedomMusic, { pause: pauseFreedomMusic }] = useSound(
    './assets/audio/music/FreedomMusic.mp3',
    { volume: 0.1 }
  )

  const escapeConditions =
    doorDestroyed &&
    pookachu.wantsToMove &&
    pookachu.direction === 'up' &&
    pookachu.xPosition >= 90 &&
    pookachu.xPosition <= 112 &&
    pookachu.yPosition === 10

  if (escapeConditions && !escaped) {
    setEscaped(true)
    setBoundaries(escapedBoundaries)
    setPookachu({
      xPosition: 105,
      yPosition: 10,
      direction: 'up',
      wantsToMove: true,
    })
  }

  function startGame(e, alt) {
    const allKeys = [
      'ArrowDown',
      'ArrowUp',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ]

    const mouseEvent = e
      ? e.type === 'mousedown' || e.type === 'click'
      : undefined

    const soundInstruction = alt ? alt : soundOn

    if (alt || mouseEvent || allKeys.includes(e.key)) {
      setGameStarted(true)
      soundInstruction !== 'soundOff' && prisonMusic()
    }
  }

  function turnOffSound() {
    if (soundOn) {
      setSoundOn(false)
      doorDestroyed ? pauseFreedomMusic() : pausePrisonMusic()
    }
    if (!gameStarted) {
      startGame(undefined, 'soundOff')
    }
  }

  function turnOnSound() {
    if (!soundOn) {
      setSoundOn(true)
      doorDestroyed ? freedomMusic() : prisonMusic()
    }
    if (!gameStarted) {
      startGame(undefined, 'soundOn')
    }
  }

  function getBombPosition(axis, pookPosition, pookDirection) {
    const offset = 25
    let calculatedPosition
    let finalPosition

    if (axis === 'x') {
      switch (pookDirection) {
        case 'up':
          calculatedPosition = pookPosition - 2
          break
        case 'down':
          calculatedPosition = pookPosition - 12
          break
        case 'left':
          calculatedPosition = pookPosition + offset - 10
          break
        case 'right':
          calculatedPosition = pookPosition - offset
          break
      }
    }

    if (axis === 'y') {
      switch (pookDirection) {
        case 'up':
          calculatedPosition = pookPosition + offset - 2
          break
        case 'down':
          calculatedPosition = pookPosition - offset
          break
        case 'left':
          calculatedPosition = pookPosition
          break
        case 'right':
          calculatedPosition = pookPosition
          break
      }
    }

    if (axis === 'x') {
      if (calculatedPosition < 0) {
        finalPosition = 0
      } else if (calculatedPosition > 220) {
        finalPosition = 220
      } else {
        finalPosition = calculatedPosition
      }
    } else if (axis === 'y') {
      if (calculatedPosition < 0) {
        finalPosition = 0
      } else if (calculatedPosition > 185) {
        finalPosition = 185
      } else {
        finalPosition = calculatedPosition
      }
    }
    return finalPosition
  }

  function placeBomb(bomb, pookachu) {
    if (gameStarted && !bomb.planted && !escaped) {
      soundOn && boink()
      setBomb((prevBomb) => {
        let xPosition = getBombPosition(
          'x',
          pookachu.xPosition,
          pookachu.direction
        )
        let yPosition = getBombPosition(
          'y',
          pookachu.yPosition,
          pookachu.direction
        )
        return {
          ...prevBomb,
          planted: true,
          xPosition: xPosition,
          yPosition: yPosition,
        }
      })
    }
  }

  function triggerBomb(bomb) {
    if (gameStarted && bomb.planted && !bomb.activated) {
      soundOn && bombsAway()
      setBomb((prev) => ({ ...prev, activated: true }))
    }
  }

  function resetBomb() {
    setBomb({ ...INITIAL_BOMB })
  }

  function checkDoor() {
    const xConditions = bomb.xPosition >= 68 && bomb.xPosition < 120
    const yCondition = bomb.yPosition <= 22
    if (xConditions && yCondition && !doorDestroyed) {
      setdoorDestroyed(true)
      soundOn && pausePrisonMusic()
      soundOn && crash()
    }
  }

  function handleKey(event) {
    if (event.key === 'a' || event.key === 'b') {
      updateAction(event)
    } else {
      updateMovement(event)
    }
  }

  function updateAction(event) {
    if (!event.repeat) {
      if (event.type === 'keydown') {
        if (event.key === 'a') {
          placeBomb(bomb, pookachu)
          setActionButtons({ ...actionsButtons, bButtonDown: true })
        } else if (event.key === 'b') {
          triggerBomb(bomb)
          setActionButtons({ ...actionsButtons, aButtonDown: true })
        }
      } else if (event.type === 'keyup') {
        if (event.key === 'a') {
          setActionButtons({ ...actionsButtons, bButtonDown: false })
        }
        if (event.key === 'b') {
          setActionButtons({ ...actionsButtons, aButtonDown: false })
        }
      }
    }
  }

  function updateMovement(event) {
    const directionChoices = [
      { eventName: 'ArrowRight', direction: 'right' },
      { eventName: 'ArrowLeft', direction: 'left' },
      { eventName: 'ArrowUp', direction: 'up' },
      { eventName: 'ArrowDown', direction: 'down' },
    ]

    let direction

    if (event.type === 'keydown' || event.type === 'keyup') {
      const choice = directionChoices.find(
        (choice) => choice.eventName === event.key
      )
      if (choice) {
        direction = choice.direction
      }
    } else if (
      event.type === 'mousedown' ||
      event.type === 'mouseup' ||
      event.type === 'mouseleave'
    ) {
      direction = event.target.dataset.direction
    }

    if (direction && !event.repeat && !escaped) {
      function getMovePreference() {
        let preference
        if (event.type === 'mouseleave') {
          preference = false
        } else if (event.type === 'keydown' || event.type === 'mousedown') {
          preference = true
        } else {
          preference = false
        }
        return preference
      }
      setPookachu((prev) => {
        return {
          ...prev,
          direction: direction,
          wantsToMove: getMovePreference(),
        }
      })
    }
  }

  useEffect(() => {
    doorDestroyed &&
      soundOn &&
      setTimeout(() => {
        freedomMusic()
      }, 1500)
  }, [doorDestroyed])

  useEffect(() => {
    if (pookachu.wantsToMove && soundOn) {
      setFootStepCount(footStepCount + 1)
      if (footStepCount % 60 === 0 && !escaped) {
        footSteps()
      }
    }
  }, [pookachu])

  useEffect(() => {
    let interval
    if (pookachu.wantsToMove && !escaped) {
      interval = setInterval(() => {
        updatePosition()
      }, 5)
    }

    if (escaped) {
      interval = setInterval(() => {
        updatePosition()
      }, 5)
      setTimeout(() => {
        clearInterval(interval)
      }, 10000)
    }

    return () => clearInterval(interval)
  }, [pookachu.wantsToMove, escaped])

  /* Challenge

	Pookachu'nun hareket etmesi ve hapishaneden kaçması için aşağıdaki updatePosition fonksiyonunun tamamlanması gerekiyor. Göreviniz fonksiyonu aşağıdaki gibi tamamlamaktır:
	
		1. updatePosition fonksiyonu çağrıldığında, pookachu state nesnesini (satır 49) boundaries state nesnesine (satır 56) uygun olarak bir sonraki adımda açıklanan şekilde güncellemek için setPookachu fonksiyonunu kullanmalıdır. Bu iki state ile, aşağıdaki özellikler bu challenge için özellikle önemlidir: 

		   
		+======================+============================================================+
		|   Özellik İsmi       |              Özelliğin Anlamı                              |
		+======================+============================================================+
		| pookachu.xPosition   | Pookachu'nun x eksenindeki mevcut konumu                   |
		+----------------------+------------------------------------------------------------+
		| pookachu.yPosition   | Pookachu'nun y eksenindeki mevcut konumu                   |
		+----------------------+------------------------------------------------------------+
		| pookachu.direction   | Baktığı yön: "sol", "sağ", "yukarı" veya "aşağı"           |
		+----------------------+------------------------------------------------------------+
		| boundaries.xAxis.min | Pookachu'nun x konumu için mümkün olan en düşük değer*     |
		+----------------------+------------------------------------------------------------+
		| boundaries.xAxis.max | Pookachu'nun x konumu için mümkün olan en yüksek değer*    |
		+----------------------+------------------------------------------------------------+
		| boundaries.yAxis.min | Pookachu'nun y konumu için mümkün olan en düşük değer*     |
		+----------------------+------------------------------------------------------------+
		| boundaries.yAxis.max | Pookachu'nun y konumu için mümkün olan en yüksek değer*    |
		+----------------------+------------------------------------------------------------+
		
			* Bütün bu değerler kapsayıcıdır. 
			  Pookachu'nun konumu bir sınırın üzerinde olabilir; ancak sınırı aşamaz.  
		  					   
		2. pookachu state nesnesi aşağıdaki gibi güncellenmelidir: 
		
				- Kullanıcı Pookachu'nun oyunun sınırlarından birini geçmesini sağlamaya çalışıyorsa (ilgili eksendeki maksimum değerin üzerinde veya minimum değerin altında - yöneldiği yönün ekseni), o zaman mevcut konumu değişmemeli ve pookachu state nesnesinin tüm mevcut özellik değerleri korunmalıdır. 
				   
				- Poocahu henüz kullanıcının gitmesini istediği yönün sınırına ulaşmamışsa, xPosition veya yPosition (" target özelliği ") aşağıdaki tabloya uygun olarak güncellenmelidir. pookachu state nesnesinin diğer tüm özellik değerleri korunmalıdır.



	+====================+=================================================+============================+
	| pookachu.direction |pookachu target property & kontrol edilecek limit | güncellenmiş target value |
	+====================+=================================================+============================+
	|      "right"       |         xPosition < boundaries.xAxis.max        | mevcut xPosition + 1       |
	+--------------------+-------------------------------------------------+----------------------------+
	|      "left"        |         xPosition > boundaries.xAxis.min        | mevcut xPosition - 1       |
	+--------------------+-------------------------------------------------+----------------------------+
	|      "down"        |         yPosition < boundaries.yAxis.max        | mevcut yPosition + 1       |
	+--------------------+-------------------------------------------------+----------------------------+
	|       "up"         |         yPosition > boundaries.yAxis.min        | mevcut yPosition - 1       |
	+--------------------+-------------------------------------------------+----------------------------+
	
		3. Görevi tamamladığınızda, hapishanenin sınırları içinde kalırken ekrandaki yön tuşlarını veya klavyenizdeki ok tuşlarını kullanarak Pookachu'yu herhangi bir yöne hareket ettirebilmelisiniz. Ayrıca A ve B tuşlarını kullanarak kapıyı patlatırsanız hapishaneden kaçabilmeniz gerekiyor
*/

  function updatePosition() {
    if(pookachu.wantsToMove) {
      setPookachu((prev) => {
        if(prev.direction === "right" && prev.xPosition < boundaries.xAxis.max) {
          prev.xPosition += 1} else if(prev.direction === "left" && prev.xPosition > boundaries.xAxis.min) {
            prev.xPosition -= 1
          } else if(prev.direction === "down" && prev.yPosition < boundaries.yAxis.max) {
            prev.yPosition += 1
          } else if(prev.direction === "up" && prev.yPosition > boundaries.yAxis.min) {
            prev.yPosition -= 1
          }
          return {...prev, xPosition:prev.xPosition, yPosition:prev.yPosition}
      })
    }
  }

  return (
    <div
      className='wrapper'
      onKeyDown={gameStarted ? handleKey : startGame}
      onKeyUp={gameStarted ? handleKey : null}
    >
      <div className='console-container'>
        <img
          className='pookachu-background-img'
          src='./assets/images/other/PookachuBackgroundImage.png'
        />
        <Controls />
        <GameScreen
          gameStarted={gameStarted}
          pookachu={pookachu}
          escaped={escaped}
          doorDestroyed={doorDestroyed}
          bombProps={{ bomb, resetBomb, checkDoor }}
        />
        <div className='overall-buttons-container'>
          <NavButtons
            wantsToMove={pookachu.wantsToMove}
            direction={pookachu.direction}
            escaped={escaped}
            mouseHandler={gameStarted ? updateMovement : startGame}
          />
          <ActionButton
            name='A'
            containerClass='a-button'
            buttonClass={actionsButtons.bButtonDown ? 'active' : ''}
            clickHandler={
              gameStarted ? () => placeBomb(bomb, pookachu) : startGame
            }
          />

          <ActionButton
            name='B'
            containerClass='b-button'
            buttonClass={actionsButtons.aButtonDown ? 'active' : ''}
            clickHandler={gameStarted ? () => triggerBomb(bomb) : startGame}
          />

          <SoundButtons clickHandlers={{ turnOnSound, turnOffSound }} />
        </div>
      </div>
    </div>
  )
}
