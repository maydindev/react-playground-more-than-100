
export default function StartButton({ clickHandler }) {
  return (
    <button className="start-button" type="button" onClick={clickHandler}>
      <span>Başla</span>
    </button>
  );
}
