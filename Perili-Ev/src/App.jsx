import "./styles.css";
import housesForSale from "./data/housesForSale";
import HouseCard from "./components/HouseCard";

export default function App() {
  /* Challenge
  
      Aşağıdaki map metodu tarafından oluşturulan houseCard'ların JSX'inin ayrı bir fonksiyonel bileşene yerleştirilmesi gerekiyor. Göreviniz bunu aşağıdaki gibi yapmaktır:
      
          1. Aşağıdaki map metodunun return ifadesindeki mevcut JSX, sizin oluşturmanız gereken bir <HouseCard /> bileşeninin tek bir örneği ile değiştirilmelidir. 
             
          2. HouseCard bileşeni, şu anda map metodu içinde döndürülen JSX ile aynı JSX'i döndürmelidir. 
      
      3. JSX'teki değişkenler, map metodunda döndüreceğiniz <HouseCard /> bileşenine aktarılması gereken prop'lar haline gelmelidir. 
         
      4. HouseCard bileşeni, bileşenler klasöründe ayrı bir dosyaya yerleştirilmeli ve bu App.jsx dosyasına aktarılmalıdır.
          
          5. <HouseCard /> içine yalnızca en fazla dört prop geçirmelisiniz. HouseData'nın her parçasını ayrı bir prop olarak manuel olarak geçirmemelisiniz. Bu görevleri tamamladıktan sonra site tamamen aynı görünmeli ve davranmalıdır. Buradaki challenge sadece " altta yatan" kodu geliştirmekle ilgilidir.
         
      Bonus Challenge: Sırasız listedeki liste öğelerini manuel olarak (şu anda oluşturuldukları gibi) değil, yinelemeli olarak (yani, bir tür yinelemeli yöntem/yaklaşım kullanarak) oluşturun.
  */

  const houseCards = housesForSale.map((houseData, index, array) => {
    return (
      <HouseCard houseData={houseData} index={index} array={array}/>
    );
  });

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src="images/logo.png" />
      </header>
      <div className="house-cards-container">{houseCards}</div>
    </div>
  );
}
