https://store-setup.netlify.app/

<!-- Bu projenin amacı

404 rotalarını işlemek

<Nav /> bileşeninde etkin sayfayı vurgulayın
<ProductDelivery /> öğesini ürün ayrıntıları için bir alt sayfa olarak oluşturun
Daha spesifik talimatlar için okumaya devam edin:

Kullanıcı 404'e ulaştığında, Sayfa bulunamadı metnini içeren bir h2 ve Sayfa bulunamadı içeren bir paragraf görmelidir
İsteğe bağlı: Ana sayfaya bir geri dönüş bağlantısı ekleyin.
404'ü test etmek isterseniz, mevcut olmayan bir rotaya bağlantı ekleyebilirsiniz.

<Nav /> içinde aktif sayfayı vurgulayın Size 3 farklı sayfaya bağlantı içeren bir Nav bileşeni verdik. Geçerli sayfayı vurgulamak için  nav-active class'ını kullanın.

Kullanıcı / üzerindeyken Home vurgulanmalıdır.
Kullanıcı /about üzerindeyken About vurgulanmalıdır.
Kullanıcı aşağıdaki yollardan herhangi birindeyken Products (Ürünler) vurgulanmalıdır: /products, /products/:id ve /products/:id/delivery.

<ProductDelivery /> bileşenini ürün detayları için bir alt sayfa olarak işleyin Kullanıcı ürün detayları sayfasını ziyaret ettiğinde, örneğin /products/2, teslimat notları için mevcut bir bağlantı vardır. Bu bağlantı kullanıcıyı /products/2/delivery sayfasına götürmeli ve <ProductDelivery /> bileşenini oluşturmalıdır.
Mevcut teslimat notları bağlantısını doğru yola sahip olacak şekilde güncelleyin. Her ürünün kendi teslimat alt yolu olmalıdır.
Kullanıcı bu alt rotaya geldiğinde < ProductDelivery /> bileşenini oluşturun. -->

# NotFound Netlify Çözümü

https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125/12?utm_source=404page&utm_campaign=community_tracking

Netlify'de NotFound sayfanızın doğru çalışabilmesi için, doğru yönlendirmelerin yapılması gerekir. Netlify, client-side routing için özel bir yapılandırma gerektirir, çünkü server tarafında geçerli bir yönlendirme yapılmadığı için, tarayıcı yalnızca mevcut sayfayı arar.

Bu sorunu çözmek için, Netlify'nin redirects dosyasını kullanabilirsiniz. Bu dosya, tüm yönlendirme isteklerini React uygulamanıza yönlendirmeye yarar. İşte nasıl yapacağınız:

redirects Dosyasını Oluşturun: Projenizin public veya static klasörüne _redirects adlı bir dosya oluşturun (bu dosya uzantısız olmalıdır).

redirects Dosyasına Aşağıdaki İçeriği Ekleyin:

plaintext
Kodu kopyala
/*    /index.html   200
Bu yapı, tüm yolları index.html dosyanıza yönlendirir, böylece React Router'ın yönetmesini sağlar.

Netlify'ye Deploy Edin: Yaptığınız değişiklikleri Netlify'ye yeniden deploy edin. Netlify, _redirects dosyasını otomatik olarak tanıyacak ve yönlendirmeleri yapılandıracaktır.

Örnek Yapı
Projede _redirects dosyanızın public klasöründe olması genellikle yeterlidir. Örneğin:

java
Kodu kopyala
my-react-app/
├── public/
│   ├── index.html
│   ├── _redirects
├── src/
│   ├── App.js
│   ├── pages/
│   └── ...
├── package.json
└── ...
Bu şekilde yapılandırdığınızda, Netlify'de uygulamanızın yönlendirmeleri doğru çalışacaktır ve kullanıcılar bilinmeyen sayfalara yönlendirildiğinde NotFound sayfanız görünecektir.






