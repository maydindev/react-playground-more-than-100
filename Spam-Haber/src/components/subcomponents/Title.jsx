export default function Title(props) {
  let message

  if (props.userEmail) {
    if (props.duplicate) {
      message = 'Abone olduğunuz için tekrar teşekkürler'
    } else {
      message = 'Spam içermeyen bültenime abone olduğunuz için teşekkürler'
    }
  } else {
    message = 'Spam içermeyen React bültenime abone olun'
  }
  return <h1 className='title'>{message}</h1>
}
