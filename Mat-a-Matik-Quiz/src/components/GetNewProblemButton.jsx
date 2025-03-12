
export default function GetNewProblemButton({ clickHandler, disabled }) {
  return (
    <button
      type="button"
      className="new-problem-button"
      onClick={clickHandler}
      disabled={disabled}
    >
      <span>Yeni Soru</span>
    </button>
  );
}
