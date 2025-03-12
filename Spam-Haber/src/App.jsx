import { useState } from "react";
import emailList from "./data/emailList";
import TopText from "./components/TopText";
import "./styles.css";
export default function App() {
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [duplicate, setDuplicate] = useState(null);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserEmail(userInput);
    setUserInput("");

    const normalizedEmail = userInput.toLowerCase();
    const emailExists = emailList.some(
      (existingEmail) => existingEmail.toLowerCase() === normalizedEmail
    );
    if (emailExists) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }

  /* Challenge

    Kullanıcı "Abone Ol" butonuna tıkladığında hiçbir şey olmuyor. Sizin göreviniz bu görevleri tamamlayarak kayıt formunun çalışmasını sağlamaktır: 
    
        1. Kullanıcı "Abone Ol" butonuna tıkladığında aşağıdakiler gerçekleşmelidir: 
			a. userEmail state'i userInput state'i içinde saklanan string'e ayarlanmalıdır.
			b. userInput state'i ilk state'ine - boş bir string - geri ayarlanmalıdır.  
			c. Kodunuz, kullanıcının girdiği email adresinin emailList array'inde zaten mevcut olup olmadığını büyük/küçük harfe duyarlı olmayan bir şekilde kontrol etmelidir. Eğer varsa, yinelenen state true olarak ayarlanmalıdır. Aksi takdirde, false olarak ayarlanmalıdır. 
        
        2. Formu aşağıdaki üç email adresi ile test etmelisiniz: 
		
				  		  Email		 			              Beklenen Sonuç 				  
			╷-----------------------------╷-----------------------------╷					
		  |     noDuplicate@gmail.com   |	  non-duplicate message     |
			|-----------------------------|-----------------------------|
			|  TestyMcTesterson@gmail.com |	   duplicate message      	|
			|-----------------------------|-----------------------------|
			|  testymctesterson@gmail.com |		  duplicate message       |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	
            
        3. Yukarıdakileri doğru bir şekilde yapıp "Abone Ol" butonuna tıklarsanız, input'un placeholder metninin " Arkadaşınızı abone yapın" haline geldiğini ve başka bir email adresi girip onu da kontrol edebildiğinizi görmelisiniz.
 */

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TopText userEmail={userEmail} duplicate={duplicate} />

      <div>
        <input
          required
          placeholder={
            !userEmail ? "E-mail adresinizi girin" : "Arkadaşınızı abone yapın"
          }
          type="email"
          name="email"
          onChange={handleChange}
          value={userInput}
        />

        <button type="submit">Abone Olun</button>
      </div>
    </form>
  );
}
