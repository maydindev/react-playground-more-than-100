import { useState } from 'react'
import Header from './components/Header'
import './styles.css'
export default function App() {
  const [userInput, setUserInput] = useState('')
  const [trackingReports, setTrackingReports] = useState([])

  const infractionMessage = '🚨🚨🚨 İHLAL TESPİT EDİLDİ! 🚨🚨🚨'

  if (trackingReports.length > 0) {
    console.log(trackingReports)
    if (trackingReports[trackingReports.length - 1].infractionDetected) {
      console.log(infractionMessage)
    }
  }

  function getTimeStamp() {
    const timeStamp = new Date()
    return (
      timeStamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }) +
      '.' +
      (timeStamp.getMilliseconds() / 1000).toFixed(3).slice(-3)
    )
  }

  /* Challenge 

Bu şirket çalışanlarını gözetlemek istiyor. Göreviniz aşağıdakileri yapmalarına yardımcı olmak:

    1. Kullanıcı textarea'ya her yazı yazdığında, userInput ve trackingReports state'lerinin her ikisi de güncellenmelidir. 
       
            a. userInput'un değeri, kullanıcının textarea'ya yazdığı her şeye eşit bir string olmalıdır (aşağıdaki görev 2'de tartışılan bir istisna dışında). 
            
            b. trackingReports state array için, dizide önceden var olan tüm nesneler korunmalı ve array'in sonuna yeni bir nesne eklenmelidir. 
                    
             Özellik   		 	          Değer 				  
		    	╷----------------------╷-------------------------------------------╷
		      |  timeStamp           |  getTimeStamp fonksiyonunun return değeri |
		    	|----------------------|-------------------------------------------|
		    	|  employeeInput       |  textarea'daki geçerli girdinin tümü      |
		    	|----------------------|-------------------------------------------|
		    	|  infractionDetected  |   employeeInput "Evil Corp." stringini    |
          |                      |  içeriyorsa true - aksi takdirde, false   |	
		    	¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
           
       2. Eğer kullanıcı "Evil Corp." metnini yazarsa ("title case" olarak) yazarsa, bu dize hem userInput state'inde hem de textarea'da otomatik olarak "Good Corp." ile değiştirilmelidir. 
       
      3. Metin alanına "Evil Corp. test" yazarak uygulamayı test edin. Bu görevleri doğru bir şekilde tamamlarsanız, her harf yazdığınızda bir console.log mesajı almalısınız ve mesajlar sampleOutput.md dosyasındakiler gibi olmalıdır.

       
       4. Yalnızca aşağıdaki kodu yazmanız gerekir. Yukarıdaki veya projenin başka bir yerindeki kodların hiçbirinin değiştirilmesi gerekmiyor.
*/
  console.log(userInput)
  console.log(trackingReports)

  return (
    <div>
      <Header />
      <textarea value={userInput}
      onChange={(e) => {
        const inputValue = e.target.value
        const infractionDetected = inputValue.includes("Evil Corp.") ? true : false
        setUserInput(inputValue.replace("Evil Corp.","Good Corp."))

        setTrackingReports(prev => [...trackingReports,
          {
            "timeStamp" : getTimeStamp(),
            "employeeInput" : inputValue, 
            infractionDetected
          }])
      }}
      placeholder='Raporunuzu buraya yazın...' />
    </div>
  )
}
