export default function Comment(props) {
  return (
    <div className='individual-comment-container'>
      <p>
        <a className='bold'>
          @{props.isAnonymous ? 'AnonimKullanıcı' : props.userName}:
        </a>
      </p>
      <p>{props.commentText}</p>
    </div>
  )
}
