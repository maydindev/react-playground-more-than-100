export default function Header({ time }) {
  const mainMessage = 'Ne Kadar Güçlüsün'
  let messageToShow

  switch (true) {
    case time >= 30:
      messageToShow = 'Yarın gel başla'
      break
    case time >= 25:
      messageToShow = 'Sakatlık çıkacak!'
      break
    case time >= 17:
      messageToShow = 'Bu bir rekor'
      break
    case time >= 13:
      messageToShow = 'Bakamayacağım'
      break
    case time >= 12:
      messageToShow = 'Çok güçlüsün'
      break
    case time >= 11:
      messageToShow = 'Dinlenmek ister misin'
      break
    case time >= 10:
      messageToShow = 'Yok artık'
      break
    case time >= 8:
      messageToShow = 'Muhteşemmmm'
      break
    case time >= 6:
      messageToShow = 'Etkilendim'
      break
    case time >= 4:
      messageToShow = 'Ooooooo'
      break
    case time >= 2:
      messageToShow = 'Eto bitmiş'
      break
    case time > 0:
      messageToShow = 'Güçsüzsün'
      break
    default:
      messageToShow = mainMessage + '?'
  }

  return <h1>{messageToShow}</h1>
}
