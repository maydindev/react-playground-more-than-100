import { useState, useEffect, useRef,  } from "react";
import "./styles.css";

import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: "",
  });

  const [verified, setVerified] = useState(undefined);

  const firstInputFocusRef = useRef(null)

  useEffect(() => {
    if (!verified) {
      setUserInput((prev) => ({
        ...prev,
        charOne: "",
        charTwo: "",
        charThree: "",
        charFour: "",
      }));
      firstInputFocusRef.current.focus()     
    }   
  }, [verified]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //İkinci denemeden sonra birinci inputa tekrar focus olabilmek için formun yenilenmesi gerekiyor. Görevde yenilemenin engellenmesi istendiğinden sadece bir defa birinci inputa focus olabiliyoruz. Bu görevler içinde yoktu, kod havuzumda bulunsun diye ben eklemek istedim.
  };

  const handleClick = () => {
    if (
      userInput.charOne === passCode[0] &&
      userInput.charTwo === passCode[1] &&
      userInput.charThree === passCode[2] &&
      userInput.charFour === passCode[3]
    ) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Challenge

	Doğrulama kodu formu henüz kullanıcının girdisini kontrol etmiyor. Sizin göreviniz aşağıdaki gibi kurulumu tamamlamaktır: 
	
		1. Kullanıcı parola input'larından birine bir karakter yazdığında, userInput state nesnesinin ilgili özelliği, diğer özellikler korunarak güncellenmelidir. Özellik adlarının ve girdilerin adlarının birbiriyle eşleştiğine dikkat edin (charOne, charTwo, vb.)
		   
		2. Kullanıcı gönder butonuna tıkladığında, bir gönderme işleme fonksiyonu sayfanın yenilenmesini engellemeli ve userInput'ta saklanan dört karakterin kombinasyonunun passCode değerine eşit olup olmadığını kontrol etmelidir (yukarıdaki 7. satırda bildirilmiştir).
		   
		3. Eşleşiyorlarsa, verified state değeri true olarak ayarlanmalıdır. Aksi takdirde false olarak ayarlanmalıdır. 
		   
		4. Kodunuz mümkün olduğunca DRY olmalıdır
*/

  return (
    <div className="wrapper">
      <Header />

      <form onSubmit={handleSubmit}>
        <Message status={verified} />

        <div>
          <input
            required
            type="password"
            name="charOne"
            maxLength="1"
            value={userInput.charOne}
            ref={firstInputFocusRef}
            onChange={handleChange}
          />

          <input
            required
            type="password"
            name="charTwo"
            maxLength="1"
            value={userInput.charTwo}
            onChange={handleChange}
          />

          <input
            required
            type="password"
            name="charThree"
            maxLength="1"
            value={userInput.charThree}
            onChange={handleChange}
          />

          <input
            required
            type="password"
            name="charFour"
            maxLength="1"
            value={userInput.charFour}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleClick} disabled={verified}>
          Gönder
        </button>
      </form>

      <Footer />
    </div>
  );
}
