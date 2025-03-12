
export default function CheckAnswerButton({ disabled }) {
  return (
    <button className="check-answer-button" type="submit" disabled={disabled}>
      <span>Kontrol Et</span>
    </button>
  );
}
