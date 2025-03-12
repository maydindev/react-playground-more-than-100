export default function Home(props) {
  const { loggedIn } = props

  function handleStartClick() {}

  return (
    <>
      <h2>Home: {loggedIn ? 'Logged in' : 'Logged out'}</h2>
      <button onClick={handleStartClick}>Start</button>
      <hr />
    </>
  )
}
