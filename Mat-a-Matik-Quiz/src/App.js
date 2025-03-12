import './styles.css'
import { useEffect, useState } from 'react'
import CheckAnswerButton from './components/CheckAnswerButton'
import GetNewProblemButton from './components/GetNewProblemButton'
import StartButton from './components/StartButton'

export default function App() {
  const [mathProblem, setMathProblem] = useState(getRandomProblem)
  const [currentResponse, setCurrentResponse] = useState('')
  const [recentCorrectAnswer, setRecentCorrectAnswer] = useState(false)
  const [recentStatusChange, setRecentStatusChange] = useState(false)
  const [answerStatus, setAnswerStatus] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Sayfa client tarafında çalıştığında
    setIsHydrated(true)
  }, [])

  function getRandomProblem() {
    const firstNum = getRandomNumber(10)
    let secondNum = getRandomNumber(10)
    const operator = getRandomOperator()
    if (operator === '÷' && secondNum === 0) {
      secondNum = 1 + getRandomNumber(9)
    }
    const mathProblem = {
      string: `${firstNum} ${operator} ${secondNum} =`,
      answer: getCorrectAnswer(firstNum, secondNum, operator).toFixed(2),
      submittedResponse: undefined,
    }
    return mathProblem
  }

  function getNewProblem() {
    setAnswerStatus('')
    setCurrentResponse('')
    setMathProblem(getRandomProblem)
  }

  function getCorrectAnswer(firstNum, secondNum, operator) {
    const x = firstNum
    const y = secondNum
    if (operator === '+') {
      return x + y
    } else if (operator === '-') {
      return x - y
    } else if (operator === 'x') {
      return x * y
    } else {
      return x / y
    }
  }

  function getAnswerStatus(num) {
    if (num < mathProblem.answer) {
      return 'Düşük'
    } else if (num > mathProblem.answer) {
      return 'Yüksek'
    } else if (num == mathProblem.answer) {
      return 'Doğru!'
    } else {
      return 'Yanlış Girdi.'
    }
  }

  function getRandomNumber(maximum) {
    return Math.round(Math.random() * maximum)
  }

  function getRandomOperator() {
    const operators = ['+', '-', 'x', '÷']
    return operators[getRandomNumber(3)]
  }

  function updateResponse(e) {
    setCurrentResponse(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let userAnswer = +(+currentResponse).toFixed(2)
    setMathProblem((prevData) => ({
      ...prevData,
      submittedResponse: userAnswer,
    }))
    setAnswerStatus(() => getAnswerStatus(userAnswer))
    setRecentStatusChange(true)
    if (mathProblem.answer == userAnswer) {
      setRecentCorrectAnswer(true)
    }
  }

  useEffect(() => {
    let timeOut
    if (recentCorrectAnswer) {
      timeOut = setTimeout(() => {
        setRecentCorrectAnswer(false)
        getNewProblem()
      }, 2000)
    }
    return () => clearTimeout(timeOut)
  }, [recentCorrectAnswer])

  useEffect(() => {
    let timeOut
    if (recentStatusChange) {
      timeOut = setTimeout(() => {
        setRecentStatusChange(false)
      }, 2000)
    }
    return () => clearTimeout(timeOut)
  }, [recentStatusChange])

  let inputClass = gameStarted ? '' : 'hidden '

  if (answerStatus === 'Doğru!') {
    inputClass += 'input-accepted'
  }

  const messageClass = answerStatus
    .toLowerCase()
    .split(' ')
    .join('-')
    .slice(0, -1)

  const gamePlayButtons = [
    <GetNewProblemButton
      disabled={recentCorrectAnswer}
      clickHandler={getNewProblem}
      key={crypto.randomUUID()}
    />,
    <CheckAnswerButton
      disabled={recentCorrectAnswer}
      key={crypto.randomUUID()}
    />,
  ]
  const startButton = <StartButton clickHandler={() => setGameStarted(true)} />
  function showStates() {
    const states = {
      mathProblem,
      currentResponse,
      recentCorrectAnswer,
      recentStatusChange,
      answerStatus,
      gameStarted,
    }

    const line = '-----------------------------'
    const space = '‎ '
    const timeStamp = new Date().toLocaleTimeString()

    for (const state in states) {
      if (states[state] === mathProblem) {
        console.log(space)
        console.log(line)
        console.log(`Durumlar ${timeStamp} itibarıyla`)
        console.log(space)
      }

      const value =
        states[state] === ''
          ? `""`
          : typeof states[state] === 'object'
          ? stringify(states[state])
          : states[state]

      function stringify(obj) {
        const string = Object.entries(obj)
          .map(([key, value]) => {
            const parsedValue =
              typeof value === 'undefined' ? value : `"${value}"`
            return `${key}: ${parsedValue}`
          })
          .join(', ')
        return `{${string}}`
      }

      console.log(state + ' = ' + value)

      if (state !== 'gameStarted') {
        console.log(space)
      }
    }
  }
  /* Challenge

        Uygulamanın mevcut kullanıcı deneyimi kötü çünkü elementler olması gerektiği zaman görünmüyor veya kaybolmuyor; hepsi bir arada. Göreviniz bunu aşağıdaki şekilde iyileştirmek: 
        
            1. <h1> elementi yalnızca oyun başlamadan önce oluşturulmalıdır. Daha sonra işlenmemelidir. 
               
            2. className "problem-container" ile <div> yalnızca oyun başladığında işlenmelidir. Ondan önce işlenmemelidir. 
               
            3. gamePlayButtons değişkeninde saklanan butonlar yalnızca oyun başlamışsa görüntülenmelidir. Aksi takdirde, bunlar oluşturulmamalı ve bunun yerine startButton değişkeninde saklanan buton görünmelidir.  
            
            4. answerStatus değişkeninde saklanan string sadece kullanıcı bir cevap gönderdiğinde görünmeli ve 2 saniye sonra kaybolmalıdır. 
               
        İpucu: Bu bileşenin üst seviyesinde herhangi bir yerde showStates() fonksiyonunu çağırabilir ve uygulamanın state'lerine ve kullanıcı etkileşime girdikçe nasıl değiştiklerine aşina olmak için uygulamayla oynayabilirsiniz. 
               
        Not: Görevi tamamlamak için *sadece* aşağıdaki return deyiminin içine küçük bir kod yazmanız gerekmektedir. Bu veya başka bir dosyada yazmanız gereken başka bir kod yok
*/

return (
  <div className='wrapper'>
    {!gameStarted && <h1>Mat-a-Matik</h1>}
    {isHydrated && (
      <form onSubmit={handleSubmit}>
        <label>
        {gameStarted && <div className={'problem-container'}>{mathProblem.string}</div>}
          <input
            type='number'
            name='value'
            placeholder='?'
            onChange={updateResponse}
            value={currentResponse}
            className={inputClass}
            autoComplete='off'
            required
          />
        </label>

        <div className={`message-container ${messageClass}`}>
          {recentStatusChange && answerStatus}
        </div>

        <div className='button-container'>
          {gameStarted && gamePlayButtons}
          {!gameStarted && startButton}
        </div>
      </form>
    )}
  </div>
)
}
