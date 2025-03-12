https://basit-yemek-restoran-nu.vercel.app/


<!--  HTML kısmına bir göz atın. Buradaki görevinizin bir kısmı Html'i JSX'e "çevirmektir". Yüzeyde HTML ve JSX oldukça benzerdir, bu nedenle yapmanız gereken yalnızca bazı küçük değişiklikler vardır. İstenilen format için public içerisindeki preview.png dosyasına bakabilirsiniz


SPOILER UYARISI!🚨

⬇️ Bu ipucunu ortaya çıkarmak için 53. satıra kaydırın ⬇️














































Bu siteyi normal bir tarayıcıda açıp geliştirme araçlarında incelerseniz, sayfanın gövdesi için aşağıdaki yapıyı görürsünüz:

<body>
  <header>
    <div class="button-container">
      <button>Menu</button>
      <button>Hakkında</button>
      <button>Saatler &amp; Lokasyon</button>
    </div>
  </header>
  <main>
    <h1 class="logo-container">Basit Yemekler Restoranı</h1>
    <p class="info-container">Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.</p>
    <div class="image-container">
      <div class="image-wrapper">
        <img class="hot-dog" src="images/hotdogs.jpg">
      </div>
      <div class="image-wrapper">
        <img src="images/sandwich.jpg">
      </div>
      <div class="image-wrapper">
        <img src="images/hamburger.jpg">
      </div>
    </div>
  </main>
  <footer>
    <p>
      Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Coding Company</a>â„¢.
    </p>
  </footer>

</body>


İşte bir örnek:

    function Example(){
        return (
            <div>
                <p>İpucuna hoş geldiniz</p>
                <AnotherExample />
            </div>
        )
    }

    Yukarıdaki kodda, Example fonksiyonel bir React bileşenidir (React fonksiyon bileşeni olarak da bilinir). Eğer bunu bir yerde kullanmak isteseydik, JSX kullanarak <Example /> şeklinde yazardık.

    <div> ve <p> elementlerdir. Elementler bileşenlerin yapı taşlarıdır.

Bileşenler başka bileşenlerden de oluşturulabilir. <AnotherExample /> bunun bir örneğidir. Başka bir bileşenin (yani <Example />) içinde yaşayan bir bileşendir.

React kodunun, bileşenlerin içine elementler yerleştirilerek modüler veya birleştirilebilir hale getirilebileceğini unutmayın. Bu bileşenler daha sonra ayrı dosyalar halinde düzenlenebilir ve bunlar istenildiği gibi içe ve dışa aktarılabilir.


Bonus Challenge

Footer'daki linki ve ismi özelleştirin.

Butonları fonksiyonel hale getirin.

Resim galerisini daha gelişmiş hale getirin.

Sayfayı daha responsive hale getirin.

Sayfayı erişilebilir hale getirin.

Sayfanın yapısını ve içeriğini korurken tasarımı değiştirin.

Sayfanın yapısını koruyun ancak temayı, içeriği ve stili değiştirin.
    - Sayfayı farklı bir ürün, hizmet, şirket, organizasyon, amaç veya kişisel profil hakkında yapın.
    - Ciddi veya komik olabilir.

Kendi bonus görevinizi oluşturabilirsiniz

/////////////////////////////////////////////////////////////////


/* Challenge: 

Bu web sayfası, HTML öğeleri vanilla JS ile DOM'a eklenerek oluşturulmuştur. Göreviniz JS'yi React JSX'e dönüştürmek ve React ile sayfaya render etmek. İşte istediğimiz şeyler: 

        1. Sayfa, JSX ile yazılmış diğer fonksiyonel bileşenlerden ve elementlerden oluşan tek bir fonksiyonel React bileşeni tarafından render edilmelidir.
        
        2. Sonuç, mevcut sayfadan farklı olmamalıdır (bonus challenge yapmadığınız sürece).
        
        3. Mevcut JS'nin tamamı sonunda silinmelidir. 
        
        4. Kod modüler ve iyi organize edilmiş olmalıdır.
*/

/*
const header = `<header>
                    <div class="button-container">
                        <button>Menu</button> 
                        <button>Hakkında</button> 
                        <button>Saatler & Lokasyon</button>
                    </div> 
                </header>`
document.body.innerHTML = header

const mainElement = document.createElement('main')
document.body.appendChild(mainElement)

const someHeading = document.createElement('h1')
someHeading.classList.add('logo-container')
someHeading.textContent = 'Basit Yemekler Restoranı'
mainElement.appendChild(someHeading)

const someParagraph = document.createElement('p')
someParagraph.classList.add('info-container')
someParagraph.textContent = `Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.`
mainElement.appendChild(someParagraph)

const imageContainer = `<div class="image-container">
                            <div class="image-wrapper">
                                <img class="hot-dog" src="images/hotdogs.jpg"/>
                            </div>
                            <div class="image-wrapper">
                                <img src="images/sandwich.jpg"/>
                            </div> 
                            <div class="image-wrapper">
                                <img src="images/hamburger.jpg"/>
                            </div>                                  
                        </div>`
mainElement.insertAdjacentHTML('beforeend', imageContainer)

const footer = `<footer>
                    <p> 
                        Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Coding Company</a>™.
                    </p>
                </footer>`
document.body.innerHTML += footer

export default header
*/

 -->


 
