import React, { useState } from "react";

function App() {
  const PLAYERS = [
    "Ali",
    "Namık",
    "Eda",
    "Ebru",
    "Suzan",
    "Samet",
    "Engin",
    "Halit",
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  // KODUNUZ BURAYA GELECEK
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [currentTeam, setCurrentTeam] = useState(1);

  const assignPlayer = (player) => {
    if (currentTeam === 1) {
      setTeam1([...team1, player]);
    } else if (currentTeam === 2) {
      setTeam2([...team2, player]);
    }
    setAvailablePlayers(availablePlayers.filter((p) => p !== player));
  };

  const resetTeams = () => {
    setTeam1([]);
    setTeam2([]);
    setAvailablePlayers(players);
    setCurrentTeam(1);
  };

  const shuffleTeams = () => {
    const shuffledPlayers = [...team1, ...team2, ...availablePlayers];
    //Math.random() her çağrıldığında 0 ile 1 arasında rastgele bir sayı döner. Bu sayıdan 0.5 çıkarıldığında, sonuç pozitif veya negatif olabilir. Bu sayede her oyuncu dizideki diğer oyunculara göre rastgele bir sıraya yerleştirilir.
    //toplam oyuncu sayısının yarısını bulur.
    shuffledPlayers.sort(() => Math.random() - 0.5);
    //Math.ceil() fonksiyonu, bu sayıyı yukarıya yuvarlar. Bu, oyuncu sayısı tek sayı olduğunda ortadaki oyuncunun "Takım 1"e gitmesini sağlar.
    const mid = Math.ceil(shuffledPlayers.length / 2);
    //slice(0, mid) ifadesi, karıştırılmış oyuncu listesinden ilk yarıyı alır ve bunu "Takım 1" olarak ayarlar.
    setTeam1(shuffledPlayers.slice(0, mid));
    //slice(mid) ifadesi ise, karıştırılmış oyuncu listesinin ikinci yarısını alır ve bunu "Takım 2" olarak ayarlar.
    setTeam2(shuffledPlayers.slice(mid));
    //Karıştırma işlemi sonrasında oyuncuların hepsi ya "Takım 1"e ya da "Takım 2"ye atanmış olduğu için, atanmamış oyuncu kalmaz. Bu yüzden, availablePlayers dizisini boş olarak güncellenir.
    setAvailablePlayers([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        {availablePlayers.length === 0
          ? "Seçilebilecek oyuncu kalmadı."
          : availablePlayers.map((player, index) => (
              <span
                key={index}
                onClick={() => assignPlayer(player)}
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                  padding: "5px",
                  display: "inline-block",
                }}
              >
                {player}
              </span>
            ))}
      </div>
      <hr />
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button
          onClick={() => setCurrentTeam((prev) => (prev === 1 ? 2 : 1))}
          style={{ marginRight: "20px",border: "1px solid black",
            padding: "3px",
            backgroundColor: "lightgrey", }}
        >
          {availablePlayers.length === 0
            ? "Seçim yapılamaz."
            : <p>Şu anda <span style={{color:"red"}}>Takım  {currentTeam}</span> için seçim yapılıyor.</p>}
        </button>
        <button
          onClick={shuffleTeams}
          style={{
            marginRight: "20px",
            border: "1px solid black",
            padding: "3px",
            backgroundColor: "lightgrey"
          }}
        >
          Karıştır
        </button>
        <button
          onClick={resetTeams}
          style={{
            border: "1px solid black",
            padding: "3px",
            backgroundColor: "lightgrey",
          }}
        >
          Sıfırla
        </button>
      </div>
      <hr />
      <div style={{ marginTop: "20px" }}>
        <h3 style={{fontWeight:"bold",textDecoration:"underline"}}>Team 1</h3>
        <div>
          {team1.map((player, index) => (
            <span
              key={index}
              style={{ marginRight: "10px", display: "inline-block" }}
            >
              {player}
            </span>
          ))}
        </div>
        <br />
        <h3 style={{fontWeight:"bold",textDecoration:"underline"}}>Team 2</h3>
        <div>
          {team2.map((player, index) => (
            <span
              key={index}
              style={{ marginRight: "10px", display: "inline-block" }}
            >
              {player}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
