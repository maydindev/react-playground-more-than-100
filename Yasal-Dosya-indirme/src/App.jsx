import { useState, useEffect } from 'react'
import Header from './components/Header'
import File from './components/File'
import Footer from './components/Footer'
import generateMessage from './utilities/generateMessage'
import './styles.css'
import { detect } from 'detect-browser'

export default function App({ serverGeneratedFileId }) {
  const [userData, setUserData] = useState({
    userId: crypto.randomUUID(),
    downloadRequested: false,
    downloadTimeStamp: undefined,
    requestedFileId: undefined,
    browser: undefined,
    location: { ip: undefined, city: undefined, country: undefined },
  })

  if (userData.downloadRequested) {
    generateMessage(userData)
  }

  useEffect(() => {
    if (userData.downloadRequested) {
      throw Error('userID değişti :-(')
    }
  }, [userData.userId])

  useEffect(() => console.log(userData),[])

  /* Challenge

	Bu dosya için indirme sayfasının bir indirme butonuna ihtiyacı var. Göreviniz aşağıdaki gibi bir tane oluşturmaktır: 
      
      	1. Kullanıcı aşağıdaki 82. satırdaki "İndir" butonuna tıkladığında, buton devre dışı kalmalı ve userData state'i aşağıdaki gibi güncellenmelidir: 
		   
           	        Özellik		 	  Değer(ler)	  
			     ╷---------------------╷-----------------------------------------------------------╷
			     |  userId             |  önceki userData state'inin userId değerini korur         |
			     |---------------------|-----------------------------------------------------------|
		  	   |  downloadRequested  |  true                                             				 |
			     |---------------------|-----------------------------------------------------------|
			     |  downloadTimeStamp  |  localeString'e dönüştürülmüş yeni bir Date nesnesi       |
			     |---------------------|-----------------------------------------------------------|
			   	 |  requestedFileId    |  indirme butonunda veri olarak saklanan dosya ID'si       |
           |---------------------|-----------------------------------------------------------|
			     |  browser            |  detect fonksiyonunun return değeri 		                   |
				   |					           |      (zaten bu dosyaya aktarılmış)						             |
           |---------------------|-----------------------------------------------------------|
			     |  location      		 |  aşağıdaki özelliklere sahip bir nesne:	  		           |
			     |					           |  - ip: kullanıcının IP adresi				                     |
				   |					           |	 - city: kullanıcının şehir adı					                 |
				   |					           |	 - country: kullanıcının ülkesinin adı		    	         |
           |                     |       													                           |
			     ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		 	2. Yukarıdakiler dışında, kodda başka hiçbir şeyin değiştirilmesine veya eklenmesine gerek yoktur. Bu görevleri başarıyla tamamlarsanız, konsolda doğru şekilde işlenmiş bir mesaj görmeniz ve butonun tıkladıktan sonra silik ve tıklanamaz hale gelmesi gerekir. 
*/
  function handleClick(event) {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => 
        setUserData((prevUserData) => {
          return {
            userId: prevUserData.userId,
            downloadRequested: true,
            downloadTimeStamp: new Date().toLocaleString(),
            requestedFileId: event.target.dataset.fileId,
            browser: detect(),
            location: {
              ip: data.ip,
              city: data.city,
              country: data.country_name,
            },
          }
        })
      )
  }
  return (
    <div>
      <Header />
      <main>
        <File />
        <div>
          <button
            className='download-button'
            data-file-id={serverGeneratedFileId}
            disabled={userData.downloadRequested}
            onClick={handleClick}
          >
            İndir
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
