import { useState, useEffect } from 'react'
import './styles.css'

import getArticles from './utilities/getArticles'
import Button from './components/Button'
import Header from './components/Header'

export default function App() {
  const [numOfArticles, setNumOfArticles] = useState(5)
  const [currentArticles, setCurrentArticles] = useState([])

  useEffect(() => {
    // İstemci tarafında çalışacak kodları buraya alıyoruz
    setCurrentArticles(getArticles(numOfArticles))
  }, [numOfArticles]) // numOfArticles değiştiğinde tekrar çalışacak

  /* Challenge

	Aşağıdaki liste öğeleri DRY (Kendini Tekrar Etme) ilkesine uymuyor. Göreviniz aşağıdakileri yaparak bunu düzeltmektir: 
	
		1. Liste öğeleri (34 ila 58. satırlar) manuel olarak oluşturulmak yerine bir tür yinelemeli yaklaşımla oluşturulmalıdır. 
		
		2. currentArticles dizisindeki her nesne için otomatik olarak bir liste öğesi olmalıdır (satır 8).
		   
		3. Eğer numOfArticles (satır 9) aynı sayıda (4) kalırsa, app bu görevleri tamamladıktan sonra aynı görünmelidir. Ancak, numOfArticles daha yüksek veya daha düşük bir sayı olarak değiştirilirse, buna karşılık gelen sayıda liste öğesi oluşturulmalıdır. Bunu test edin
*/

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <ul>

          {/*------------Öğeleri aşağıda listeleyin-------------------------------------------------------*/}

          {currentArticles.map((article, index) => 
            <li key={index} className='article'>
            <a href={article?.link} target='_blank'>
              {article?.title}
            </a>
          </li>
          )}
          
        {/*------------Öğeleri yukarıda listeleyin-------------------------------------------------------*/}
        
        </ul>
        <Button
          numOfArticles={numOfArticles}
          setCurrentArticles={setCurrentArticles}
        />  
      </main>
    </div>
  )
    
  
}

{/*
  <li className='article'>
  <a href={currentArticles[0]?.link} target='_blank'>
    {currentArticles[0]?.title}
  </a>
</li>

<li className='article'>
  <a href={currentArticles[1]?.link} target='_blank'>
    {currentArticles[1]?.title}
  </a>
</li>

<li className='article'>
  <a href={currentArticles[2]?.link} target='_blank'>
    {currentArticles[2]?.title}
  </a>
</li>

<li className='article'>
  <a href={currentArticles[3]?.link} target='_blank'>
    {currentArticles[3]?.title}
  </a>
</li>
*/}
          
       