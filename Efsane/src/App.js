import "./styles.css";
import { useState, useEffect } from "react";

import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setPlayerName((prevName) => prevName.trim() + " The King");
  }

  /* Challenge

	Bu RPG'nin kahramanının bir isme ihtiyacı var. Göreviniz aşağıdaki gibi bir input elementi oluşturmaktır:
	
		1. Input aşağıda işaretli alanda olmalı ve aşağıdaki özelliklere sahip olmalıdır: 
	  	    - className: "name-input"	
	  	    - type: " text."
	  	    - maximum length: 16 karakter.
	  	    - placeholder metin: "Karakterinizin Adını Girin".
	  	    - required: evet  
	  	    - disabled: form gönderildiyse evet (10-14 satırlarındaki koda bakın). 
	  
		2. playerName'in geçerli değeri, kullanıcının input'a yazdığı geçerli string olmalıdır. Kullanıcının input'u her değiştiğinde, state güncellenmelidir.
		
		3. Input kontrol edilmelidir. Değeri playerName state'i tarafından kontrol edilmelidir.
	
		4. Kodunuzu sadece aşağıya yazmalısınız. Başka bir yerde hiçbir şeyin değiştirilmesine veya eklenmesine gerek yok.  Bu görevleri doğru bir şekilde tamamlarsanız, karakterinizin adını yazdıktan ve "Devam" a tıkladıktan sonra bir kahramanın adını almalısınız
*/

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TopSection submitted={submitted} />

      {/*-----Input'unuz burada olacak----------*/}

      <input
        type="text"
        className="name-input"
        placeholder="Karakterinizin Adını Girin"
        required
        disabled={submitted}
        maxLength={16}
        value={playerName}
        onChange={handleChange}
      />

      {/*-----Input'unuz burada olacak----------*/}

      <BottomSection submitted={submitted} playerName={playerName} />
    </form>
  );
}
