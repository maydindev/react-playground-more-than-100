import { useState, useEffect } from 'react'

export default function footer() {
  const [taskComplete, setTaskComplete] = useState(false)

  useEffect(() => {
    const containers = [...document.querySelectorAll('.lineup-container')]

    const testCondition =
      containers.length === 3 &&
      containers[0].childNodes[1] &&
      containers[1].childNodes[1] &&
      containers[2].childNodes[1] &&
      containers[0].childNodes[1].textContent === 'Gençlik Boyutu' &&
      containers[1].childNodes[1].textContent === 'Yanan Kar Taneleri' &&
      containers[2].childNodes[1].textContent === 'Pusula Kız Kardeşleri'

    if (testCondition) {
      setTaskComplete((prev) => true)
    }
  }, [])

  if (taskComplete) {
    return (
      <footer>
        Gerçek bir festival değil. Tüm grup adları sahte gruplar için isim
        üreteci yardımıyla oluşturulmuştur ve sahte olabilirler, ancak
        bazılarının gerçek olması muhtemeldir.
      </footer>
    )
  } else {
    return null
  }
}
