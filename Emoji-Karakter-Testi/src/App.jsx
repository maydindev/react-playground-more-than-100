import { useState, useEffect } from 'react'
import ResultsModal from './components/ResultsModal'
import EmojiLists from './components/EmojiLists'
import emojis from './data/emojis'
import './styles.css'

export default function App() {
  const [likedEmojis, setLikedEmojis] = useState([])
  const [passedEmojis, setPassedEmojis] = useState([])
  const [currentEmojis, setCurrentEmojis] = useState(getRandomEmojis())
  const [showResults, setShowResults] = useState(false)
  const [resultsReady, setResultsReady] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  function handleClick(e) {
    const clickedEmoji = e.target.textContent
    setLikedEmojis([...likedEmojis,clickedEmoji])

    const notClickedEmojis = currentEmojis.filter((emoji) => emoji !== clickedEmoji)
    setPassedEmojis([...passedEmojis,...notClickedEmojis])

    setCurrentEmojis(getRandomEmojis())
  }
  /* Challenge

	Uygulamanın çalışması için yukarıdaki handleClick fonksiyonunun tamamlanması gerekir. Fonksiyon, kullanıcı butonlardan birine tıkladığında çağrıldığında üç şey yapmalıdır (satır 77 ila 85): 
	
		1. Kullanıcının tıkladığı emoji, likedEmojis state array*'inin sonuna eklenmelidir.  
		   
		2. Kullanıcının tıklamadığı emojiler passedEmojis state array*'in sonuna eklenmelidir. 
		   
		3. currentEmojis state'i getRandomEmojis fonksiyonunun return değerine ayarlanmalıdır. 
		   
Sadece yukarıdaki handleClick fonksiyonunun içine kod yazmalısınız. Projenin herhangi bir yerine başka bir şey eklenmesine veya değiştirilmesine gerek yoktur.
		  
	* Başka bir deyişle, bu state güncellenmeli ve yeni değeri daha önce eklenen tüm emojilerin (varsa) ve ardından yeni eklenen emoji(ler)in bir array'i olacak şekilde güncellenmelidir. 
*/

  function getRandomEmojis() {
    function chooseRandomEmoji() {
      return emojis[Math.floor(Math.random() * emojis.length)]
    }
    return new Array(3).fill('').map((item) => chooseRandomEmoji())
  }

  function getResults() {
    setShowResults(true)
  }

  function reset() {
    setLikedEmojis([])
    setPassedEmojis([])
    setShowResults(false)
    setResultsReady(false)
  }

  useEffect(() => {
    showResults &&
      setTimeout(() => {
        setResultsReady(true)
      }, 2000)
  }, [showResults])

  function generateListItems(element) {
    return <li key={crypto.randomUUID()}>{element}</li>
  }
  useEffect(() => {
    // Emojilerin yüklenmesi
    setHydrated(true)
  }, [])

  return (
    <div className='wrapper'>
      <div className='results-counter'>{likedEmojis.length} / 10</div>

      <ResultsModal
        showResults={showResults}
        getResults={getResults}
        resultsReady={resultsReady}
        reset={reset}
        generateListItems={generateListItems}
        likedEmojis={likedEmojis}
      />

      <h1>Emoji Kişilik Testi</h1>

      {hydrated ? ( // hydrated true olduğunda içeriği göster
        <>
          <div className='overall-emojis-container'>
            <button onClick={handleClick}>{currentEmojis[0]}</button>
            <button onClick={handleClick}>{currentEmojis[1]}</button>
            <button onClick={handleClick}>{currentEmojis[2]}</button>
          </div>

          <EmojiLists
            likedEmojis={likedEmojis}
            passedEmojis={passedEmojis}
            generateListItems={generateListItems}
          />
        </>
      ) : (
        // hydrated false olduğunda yükleniyor mesajını göster
        <p>Emojiler yükleniyor...</p>
      )}
    </div>
  )
}
