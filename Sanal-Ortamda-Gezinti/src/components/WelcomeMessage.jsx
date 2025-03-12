export default function WelcomeMessage({ userData }) {
  if (userData.hasEntered) {
    return <p> Hoş geldiniz</p>
  } else {
    return null
  }
}
