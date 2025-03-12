import { useState, useEffect } from "react";

export default function BottomSection({ submitted, playerName }) {
  const [inputRendered, setInputRendered] = useState(false);

  useEffect(() => {
    const inputs = document.getElementsByClassName("name-input");
    if (inputs.length > 0) {
      setInputRendered(true);
    }
  }, []);

  if (!submitted || !inputRendered) {
    return (
      <button
        disabled={submitted}
        type="submit"
        style={!inputRendered ? { marginTop: "50px" } : null}
      >
        Devam
      </button>
    );
  } else {
    return <p>Tebrikler, {playerName}. Adın kahramanların arasına yazıldı</p>;
  }
}
