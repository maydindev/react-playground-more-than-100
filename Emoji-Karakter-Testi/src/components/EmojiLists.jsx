export default function EmojiLists(props) {
  return (
    <div className='overall-emoji-lists-container'>
      <div className='individual-emoji-list-container'>
        <h3> Beğenilen Emojiler</h3>
        <ul>{props.likedEmojis.map(props.generateListItems)}</ul>
      </div>

      <div className='individual-emoji-list-container'>
        <h3> Geçen Emojiler</h3>
        <ul>{props.passedEmojis.map(props.generateListItems)}</ul>
      </div>
    </div>
  )
}
