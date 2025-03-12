import "./styles.css";
import { useState } from "react";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);

  /* Challenge
  
    Kullanıcının bir video oyununu oynatmasını ve duraklatmasını sağlayacak buton oluşturuyorsunuz. Göreviniz bunu ayarlamak ve aşağıdaki div'e (satır 26) aşağıdaki gibi yerleştirmektir: 
            
        1. Buton, "video-game-button" şeklinde bir className almalıdır
        
        2. Kullanıcı butona tıkladığında, gameRunning durumunun boolean değeri şu anda olduğu değerin tersine ayarlanmalıdır (true'dan false'a veya tam tersi).
            
        3. Eğer gameRunning doğru ise, buton "Pause" kelimesini göstermelidir. Eğer gameRunning değeri false ise, buton "Play" kelimesini göstermelidir. Başka bir deyişle:

          
             ┌─────────────┐     ------------>     ┌─────────────┐            
             │     Play    │         click         │    Pause    │
             └─────────────┘     <------------     └─────────────┘
           gameRunning = false                    gameRunning = true 
           (oyun duraklatıldı)                   (oyun oynanıyor)
             
        4. Bu görevleri doğru bir şekilde tamamlarsanız, butona tıkladığınızda bazı güzel görsel efektlere sahip olmalı ve çalışmamızın arka planı otomatik olarak açık mavi bir arka planla değiştirilmelidir.
*/
  const handleGameRunning = () => {
    setGameRunning(!gameRunning);
  }

  return <div>
    <button className="video-game-button" onClick={handleGameRunning}>{gameRunning ? "Pause" : "Play"}</button>
  </div>;
}
