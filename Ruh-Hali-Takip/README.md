https://ruh-hali-takip-one.vercel.app/

<!-- Üzerinde çalışmanız gereken bir veri diziniz var ve bu dizideki her bir öğe için bileşenler oluşturmanız gerekiyor. Başka bir deyişle, yalnızca array üzerinde yineleme yapmak değil, aynı zamanda orijinal array'deki her bir öğeye karşılık gelen ve bu öğeleri temel alan bir dizi yeni öğe üretmek istiyorsunuz. Böyle bir şey yapmanın standart bir yolu nedir?

🚨 Spoiler uyarısı: Başka bir ipucu ister misiniz? ⬇️ 50. satıra kaydırın. 🚨














































map yöntemini kullanın

🚨 Spoiler uyarısı: Başka bir ipucu ister misiniz? ⬇️ 100. satıra kaydırın. 🚨















































map metodunun, her değerin metodun içine aktardığınız callback fonksiyonunun return değerini yansıttığı yeni bir array oluşturduğunu unutmayın. Dönüş değerinizi mevcut sabit kodlanmış bileşenler üzerinde modelleyebilir, sabit kodlanmış verileri map yönteminin yinelediği dizinin geçerli elemanından gelen verilerle değiştirebilirsiniz.

🚨 Spoiler uyarısı: Başka bir ipucu ister misiniz? ⬇️ 150. satıra kaydırın. 🚨















































Bunu nasıl yapacağınızdan emin değilseniz, sabit kodlanmış DiaryCard bileşenlerinden birini orijinal konumunda tutmak ve sabit kodlanmış verileri doğrudan array'den içe aktarılan verilerle değiştirmek yardımcı olabilir.

İşte biraz benzer bir örnek:

    const peopleArray = [{name: "Namık"}, {name: "Eda"}, {name: "Engin"}, {name: "Suzan"}]

    return (
        <p>Merhaba, Namık</p>
    )


⬆️ bunu şu şekilde değiştirebilirsiniz ⬇️

    const peopleArray = [{name: "Namık"}, {name: "Eda"}, {name: "Engin"}, {name: "Suzan"}]

    dönüş (
        <p>Merhaba, {peopleArray[0].name}</p>
    )

Ve sonra paragraf elementinin ikinci versiyonunu array üzerinde nasıl eşleme yapacağınıza ve array'deki her nesne için nasıl paragraf oluşturacağınıza dair bir model olarak kullanabilirsiniz.

    const peopleArray = [{name: "Namık"}, {name: "Eda"}, {name: "Engin"}, {name: "Suzan"}]

    peopleArray.map(person => <p> Merhaba, {person.name} </p>)

Not: benzetme tam olarak doğru değil. Bu örnekte, öğelere içerik ekliyorsunuz, oysa challenge'da bir bileşene prop ekliyorsunuz. Yaptığınız şeyi buna göre ayarlamanız gerekecektir.



Bileşenlerin (ve bileşen dizilerinin) değişkenlerde saklanabileceğini ve bu değişkenlerin daha sonra sayfaya işlenen bileşenin return değerinin bir parçası olabileceğini unutmayın.

Başka bir deyişle, şuna benzer bir şey yapabilirsiniz:

function App() {

    const paragraphElements = [<p>Example 1</p>, <p>Example 2</p>, <p>Example 3</p>]

    return (
        <div>
            {paragraphElements}
        </div>
    )
}

Not: paragraphElements bir JS değişkenidir, bu nedenle JSX'ten çıkmak ve bir anlığına JS'e geri dönmek için süslü parantezlere ihtiyacımız var.

Bir başka not: bu çözümü kelimesi kelimesine kopyaladığınızda, 'Listedeki her çocuk benzersiz bir " key" prop'a sahip olmalıdır' şeklinde bir hata mesajı alırsınız. Başka bir ipucunda ele alınan bu sorunla başa çıkmanız gerekecektir.

React'te, bir listedeki her bileşen veya eleman benzersiz bir key'e ihtiyaç duyar. Key'lerin nasıl oluşturulacağı ve kullanılacağı hakkında bilgi edinmek için https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key adresini okuyun.

Ayrıca diaryData array'indeki nesnelere de yakından bakmak isteyebilirsiniz. Her birinin içinde sizin için oldukça yararlı olabilecek şeyler var!

DiaryCard bileşenlerine prop'ları aktarma şeklinizi, orijinal kodlanmış bileşenlerde aktarılma şekillerinden daha kısa ve net hale getirebilir misiniz?

Not: Bunu nasıl yaptığınıza bağlı olarak, components klasöründeki DiaryCard.jsx dosyasında propların alınma şeklini ayarlamanız gerekebilir. Ancak, hiçbir ayarlama gerektirmeyen süper kısa hale getirmenin bir yolu var
 -->
