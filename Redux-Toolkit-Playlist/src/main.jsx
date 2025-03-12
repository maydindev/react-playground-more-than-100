import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './data/store'
import { Provider } from 'react-redux'

//ÖNEMLİ BİLGİLENDİRME: Asıl çalıştığım dosyayı githuba gönderirken bağlantı sorunu oluştu ve dosyayı düzeltemediğim için kodları yeni bir dosyaya alma durumunda kaldım. Kayıtlarda hareket görünmeyeceğinden egzersizin kopyala yapıştır olarak düşünülmemesini rica ederim.

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)

/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
*/

//main.jsx:11 Uncaught TypeError: ReactDOM.render is not a function hatası çözümü
//Bu hata, React 18 sürümüyle birlikte gelen değişikliklerden kaynaklanmaktadır. React 18'de ReactDOM.render() fonksiyonu yerine artık ReactDOM.createRoot() kullanılmaktadır. Eğer React 18 kullanıyorsanız, projenizde aşağıdaki gibi bir kodu kullanmanız gerekir:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
  </Provider>);
