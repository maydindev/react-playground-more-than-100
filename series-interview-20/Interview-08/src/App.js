import React, { useState, useRef } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" }
  ]);
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  //username: "NamıkKorona1", password: "1234567" 
  //username: "yeniHesap", password: "1234567" 
  //username: "yeni", password: "123"
  //username: "yeniHesapyeniHesapyeniHesapyeniHesap", password: "1234567123456712345671234567" 

  const onSubmit = (e) => {
    // KODUNUZ BURAYA GELECEK
    e.preventDefault()
    const isSuccess = accounts.some((account) => {
      return account.username === username && account.password === password;
    })
    console.log(isSuccess)
    
    if(isSuccess) {
      alert(`Login başarılı, selam ${username}.`);
      setUsername("")
      setPassword("")
    } else if(!isSuccess && username.length >= 6 && password.length >= 6 && username.length <=20 && password.length <=20) {
      alert(`Yeni hesap oluşturuldu, merhaba ${username}`)
      const newAccounts = [...accounts,{username,password}]
      setAccounts(newAccounts)
      setUsername("")
      setPassword("")
    } else if(username.length < 6 && password.length < 6) {
      alert(`Username ve password, 6 karakterden uzun olmalıdır.`)
    } else if(username.length > 20) {
      alert(`Username 20 karakteri geçemez.`)
    } else {
      alert(`Kullanıcı adı veya şifre hatalı.`)
      setUsername("")
      setPassword("")
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10
      }}
      onSubmit={onSubmit}
    >
      <h3><strong>Login</strong></h3>
      <br />
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={/* KODUNUZ BURAYA GELECEK */ (e) => setUsername(e.target.value)}
        onFocus={() => setIsFocusedUsername(true)}
        onBlur={() => setIsFocusedUsername(false)}
        style={{ marginBottom: 5, border: isFocusedUsername ? "2px solid black" : "1px solid black", outline: 'none' }}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={/* KODUNUZ BURAYA GELECEK */ (e) => setPassword(e.target.value)}
        onFocus={() => setIsFocusedPassword(true)}
        onBlur={() => setIsFocusedPassword(false)}
        style={{ marginBottom: 10, border: isFocusedPassword ? "2px solid black" : "1px solid black", outline: 'none' }}
      />
      <button style={{ alignSelf: "center", border: "1px solid black",backgroundColor:"lightgray", width:"80px"}} type="submit" /*onClick={onSubmit}*/>
        Submit
      </button>
    </form>
  );
};

export default App;
