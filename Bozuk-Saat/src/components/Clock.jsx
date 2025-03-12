import { useState, useEffect } from 'react'

export default function Clock(props) {
  const [time, setTime] = useState(getTime)

  function getTime() {
    return new Date()
  }

  /*
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime)
      }, 1000)
      return () => clearInterval(intervalId)
  },[])
  */

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setTime(getTime)
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, []);
  //Vercel, sunucu taraflı render (SSR) yapan bir platformdur. Eğer kodunuzda setInterval doğrudan bileşen mount edilmeden çalışıyorsa, bu kod sunucu tarafında çalışıyor olabilir ve tarayıcıda beklenen gibi davranmayabilir. setInterval gibi tarayıcıya özgü fonksiyonları yalnızca istemci tarafında çalıştırmanız gerekir.
  //Bu kod parçası, window nesnesinin mevcut olup olmadığını kontrol eder ve setInterval'ı yalnızca istemci tarafında başlatır.



  /* Challenge 
    
   Saat şu anda açıkken zamanı güncellemiyor. Göreviniz bunu aşağıdaki şekilde düzeltmektir:
      
        1. Saat, " time" olarak adlandırılan state için verilerini periyodik olarak güncellemelidir, böylece saniyeleri doğru bir şekilde yansıtır. State için güncellenmiş değerleri elde etmek için getTime fonksiyonunu kullanmalısınız. 
        
        2. Saat çalışmaya başladığında, sol üstteki "x" butonuna tıklayarak test etmelisiniz.  köşesine tıklayın ve ardından uygulamayı birden çok kez açıp kapatmayı simüle etmek için saat simgesine birden çok kez tıklayın. 
        
        3. İkinci adımı tamamladığınızda, simüle edilmiş iPhone'da saati açtığınızda ekranın sol üst köşesindeki counter asla 1'in üzerine çıkmamalı ve saati kapattığınızda 0'a geri dönmelidir. Eğer durum böyle değilse, kodunuzu optimize etmek için yapmayı unuttuğunuz ve düzeltmeniz gereken bir şey var demektir 
        
    Not: Aşağıdaki satırların üstünde veya altında herhangi bir kod değiştirmenize veya eklemenize gerek yoktur. Verileri doğru şekilde güncellerseniz, alt satırın altındaki kod otomatik olarak ayrıştırılacak ve görüntülenecektir, bu nedenle görevi tamamlamak için yapmanız gereken başka bir şey yok  */

  /* ------------- Kodunuzu aşağıya yazın ---------------------------------------*/

  /* ------------- Kodunuzu yukarıya yazın -------------------------------------*/

  const dayName = time.toLocaleString([], { weekday: 'long' })
  const dayNumber = time.getDate()
  const month = time.toLocaleString([], { month: 'long' })
  const year = time.getFullYear()
  const clockTime = time.toLocaleString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
  })

  return (
    <div className='Clock'>
      <button
        className='close-button'
        name='Clock'
        onClick={props.toggleClock}
      ></button>
      <div className='date-info'>
        <p>{dayNumber} Mart</p>
        <p>{dayName}</p>
      </div>
      <div className='time-info'>{clockTime}</div>
    </div>
  )
}
