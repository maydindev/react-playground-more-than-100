import "./styles.css";

import { useState } from "react";
import Enemy from "./components/Enemy";
import Button from "./components/Button";
import runGame from "./utilities/runGame";
import initialEnemyData from "./data/initialEnemyData";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [enemiesData, setEnemiesData] = useState(initialEnemyData);

  runGame(gameRunning, setEnemiesData);

  /* Challenge
		
	Bu RPG aksiyon kalesinin düşmanlara ihtiyacı var. Göreviniz onları aşağıdaki gibi oluşturmak: 
	
		1. "castle-container" div'i, bileşeni yukarıda zaten içe aktarılmış olan 3 Enemy elementi içermelidir. 
		
		2. Her bir Enemy elemanı 3 prop almalı ve bunlar da enemiesData state array'indeki 3 enemy data nesnesinin 1'inden aşağıdaki değerleri almalıdır: 
			
			   Prop         (karşılık gelen*) Değerler 				  
			╷---------------╷-----------------------------╷					
		  | currentImage | enemies[n].currentImage |
			|---------------|-----------------------------|
			| position | enemies[n].position |
			|---------------|-----------------------------|
			| orientation | enemies[n].orientation |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	
								        n = 0, 1 veya 2
										
										*Temel değerleri istediğiniz şekilde elde edebilirsiniz!
			
		3. Sonuç olarak, 3 enemiesData nesnesinin her birine karşılık gelen 3 Enemy elementi olmalıdır, bu da kalede üç farklı konumda 3 farklı düşmanla sonuçlanır. " Play " butonuna tıkladığınızda, ileri geri yürümeye başlamalıdırlar!
		   
*/

  return (
    <div className="wrapper">
      <div className="meadow-container">
        <div className="castle-container">
          {/*------Enemy elementleriniz aşağıda------*/}
          {enemiesData.map((enemy) => {
            return (
              <Enemy currentImage={enemy.currentImage} position={enemy.position} orientation={enemy.orientation} />
              )
          })}
          {/*------Enemy elementleriniz yukarıda------*/}
        </div>
      </div>

      <Button stateProps={{ gameRunning, setGameRunning }} />
    </div>
  );
}
