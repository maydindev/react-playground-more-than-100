import convertToTitleCase from './convertToTitleCase'

export default function generateMessage(userData) {
  console.log(
    `${userData.location.ip} IP adresinde ${userData.location.city}, ${
      userData.location.country
    } adresinde ${
      userData.userId
    } kullanıcı kimliğine sahip yasal olarak sorumlu bir kişi ${
      userData.requestedFileId
    } dosyasını ${userData.downloadTimeStamp} adresinde ${convertToTitleCase(
      userData.browser.name
    )} ${userData.browser.type} sürümünü ${
      userData.browser.version
    } kullanarak ${userData.browser.os} ile elde etti.`
  )
}
