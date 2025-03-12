import { useState } from 'react'
export default function SolicitationMessage() {
  const [amount, setAmount] = useState(5)

  function handleClick() {
    const message = `Kullanıcıyı premium bülten için açılış sayfasına gönderin. Onlardan aylık ${amount}$ ücret alın.`
    console.log(message)
    setAmount(amount + 5)
  }

  return (
    <p>
      React'i nasıl kullanacağınıza dair daha fazla püf noktası ve ipucu ister
      misiniz? Haftalık bültenime abone olun. Size satış yapmak için tıklama
      tuzağı girişimleriyle spam göndermeyeceğime söz veriyorum. Hayır,
      gerçekten yapmayacağım - söz veriyorum. Ayrıca, React'in
      geliştiricilerinin bilmenizi istemediği <span>tek gizli numarayı</span>{' '}
      öğrenmek istiyorsanız,{' '}
      <a href='#' onClick={handleClick}>
        lütfen buraya tıklayın
      </a>
    </p>
  )
}
