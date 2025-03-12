export default function Stock({stock}) {
  /* Challenge

    Aşağıdaki değişkenler şu anda verilerle sabit kodlanmıştır. Sizin göreviniz aşağıdakileri yaparak bunları dinamik olarak oluşturulmuş değerlere dönüştürmektir: 
    
        1. İlk dört değişkenin değerleri - stockName, currentPrice, prevClosingPrice ve logo - stock adlı prop aracılığıyla bileşene aktarılan karşılık gelen değerler olmalıdır. (currentPrice ve prevClosingPrice için sayılar stringe dönüştürülmelidir).  
           
        2. Diğer dört değişken - numericalChange, rateChange, arrow ve colorClass - iki fiyat değerine göre aşağıdaki gibi belirlenmelidir: 


           
           Değişken		                            Değer 				  
			╷-------------------╷---------------------------------------------------------------╷
			|  numericalChange  |  CurrentPrice ile prevClosingPrice arasındaki fark            |  
			|-------------------|---------------------------------------------------------------|
			|  rateChange       | Fiyatın prevClosingPrice'a göre % olarak yükseldiğini veya    |
      |                   | düştüğünü temsil eden bir string'e dönüştürülmüş bir sayı     |   
			|-------------------|---------------------------------------------------------------|
			|  colorClass       | hisse senedi değer kazandıysa "yeşil"                         |
      |                   | hisse senedi değer kaybetmişse "kırmızı"                      |
      |                   | hisse senedi değerini koruduysa undefined                     |
			|-------------------|---------------------------------------------------------------|
			|  arrow            | Hisse senedi değer kazandıysa  "⬆"                            |
      |                   | Hisse senedi değer kaybetmişse "⬇"                            |
      |                   | Hisse senedi değerini koruduysa "▬"	                          |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	

        3. numericalChange ve rateChange öğelerinin her ikisi de ondalık basamağın yüzde birine kadar temsil edilen sayılar olmalı ve bu sayılar yuvarlanmalıdır. Örneğin, 5 -> 5.00, 0 -> 0.00, 52.1 -> 52.10 ve 84.119 -> 84.12. 
           
        4. Değişkenler aşağıdakinden daha verimli bir şekilde ayarlanabilir. Ekrana yansıtılan son değerler istediğiniz gibi olduğu sürece, değişkenlerin ayarlanma şeklini istediğiniz gibi değiştirebilirsiniz. Okunabilirliği korurken kodunuzu olabildiğince kısa ve DRY (Kendinizi Tekrar Etmeyin) yapmaya çalışın.
           
        Not: Sayıların stringlere dönüştürülmesiyle ilgili kısmı fazla düşünmeyin. Nasıl yaklaştığınıza bağlı olarak, bu challenge'ı çözerken  muhtemelen otomatik olarak gerçekleşecektir. 

*/

  //const stockName = "STOK";

  //const logo = "./images/question-solid.svg";

  //const currentPrice = "221.32";

  //const prevClosingPrice = "218.45";

  //const numericalChange = "2.87";
  const numericalChange = (stock.currentPrice - stock.prevClosingPrice).toFixed(2);

  //const rateChange = "1.31";
  const rateChange = ((numericalChange / stock.prevClosingPrice)*100).toFixed(2)

  //const colorClass = "green";
  const colorClass = numericalChange > 0 ? "green" : numericalChange < 0 ? "red" : undefined

  //const arrow = "⬆";
  const arrow = numericalChange > 0 ? "⬆" : numericalChange < 0 ? "⬇" : "▬"

  return (
    <div className="stock-container">
      <div className={colorClass}>
        <p>
          {arrow}
          {numericalChange}
        </p>
        <p>{rateChange}%</p>
      </div>
      <div>
        <img className="logo" src={stock.logo} />  
      </div>
      <div>
      <br />
        <p>{stock.stockName}</p>
      </div>
      <div>
        <p>${stock.currentPrice}</p>
        <p>Güncel Fiyat</p>
      </div>
      <div>
        <p>Önceki Kapanış: ${stock.prevClosingPrice}</p>
      </div>
    </div>
  );
}
