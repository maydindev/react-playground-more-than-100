export default function generateMessage(userData) {
  console.log(
    `Kullanıcının siteye girmesi ${
      (userData.entranceTime - userData.pageLoadTime) / 1000
    } saniye sürdü ve butona ${userData.clickCoordinates.offsetX}, ${
      userData.clickCoordinates.offsetY
    } koordinatlarında tıkladılar.`
  )
}
