https://product-details-page-ma.netlify.app/

<!--

Bu projenin amacı, bizi bir ürün detay sayfasına götürecek bir ürüne tıklayabilmektir.
Örneğin, Cheese ürününe tıklamak kullanıcıyı /products/1 adresine götürecektir.
Kullanıcı daha sonra bu URL'yi kopyalayabilir ve Cheese ürününün ürün ayrıntılarına ulaşacak bir arkadaşına gönderebilir.

Bunun için, söz konusu ürünün ürün ayrıntılarını almak üzere <ProductDetails /> bileşenini uygulamanız gerekir.

Kullanacağınız URL endpoint'leri GET istekleridir:
Temel URL: https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app
Endpoint: productdetails/id:id.json

Örnek endpoint'ler:

https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/productdetails/id1.json
https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/productdetails/id2.json
https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/productdetails/id3.json
1, 2 veya 3 sayısını kullanıcının ziyaret ettiği ürünün id'si ile değiştirmeniz gerekir.

Not: id1, id2 ve id3'ten önceki id kaldırılmamalıdır. Ayrıca, bu endpoint <StoreFront /> bileşeninde kullanılandan farklıdır.
Browser sekmesini açık tutun, böylece kod yazarken sonucu test edebilirsiniz!
Talimatlar için aşağı kaydırın.

App bileşeni
Ana sayfa için <StoreFront /> bileşenini oluşturarak başlayın (/)
Ardından, kullanıcı /products/1, /products/2, /products/3 vb. gibi bir ürün sayfasını her ziyaret ettiğinde <ProductDetails /> bileşenini oluşturun.

Product bileşeni
<div className="product" /> öğesini, kullanıcıyı ilgili ürün ayrıntıları sayfasına yönlendiren bir bağlantıyla sarın. Örneğin, kullanıcı id 1 olan ürüne tıkladığında /products/1 adresine yönlendirilmelidir.

ProductDetails bileşeni
Sizi ana sayfaya geri götürecek şekilde back'i home'a bağlayın.
Bu bileşenin URL'den aldığı id'yi okuyun. Konsola yazdırın ve Browser sekmesinde deneyerek çalıştığından emin olun.

useFetch custom hook'u Base URL ile ayarlayın.
Ürün ayrıntılarını yukarıda verilen endpoint'ten yükleyin. id'yi kullanıcının göz attığı geçerli id ile değiştirdiğinizden emin olun.
State'i, ürün görünür hale gelecek şekilde güncelleyin. -->
