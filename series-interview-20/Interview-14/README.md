https://interview-14-xi.vercel.app/

<!-- İki bileşen oluşturun; biri parent (üst) bileşen, diğeri ise alt (sayfa) bileşen olarak adlandırılır. Parent bileşen, kullanıcı listesini alır ve koşullu olarak yükleme durumunu veya veriden oluşturulan gerçek kullanıcı listesini renderlar. Parent bileşen, alınan kullanıcı dizisi ve her sayfada görüntülenmesi gereken öğe sayısı bilgilerini alt bileşene prop olarak iletmelidir.

Alt bileşen, sayfaları tıklanabilir bağlantılarla altında geçiş yapılabilir hale getiren bir sayfa listesi görüntüler. İlk sayfa bağlantısına tıkladığında, kullanıcıları ilk sayfadan başlayarak gösterir ve ardından ilgili sayfalara yönlendiren tıklanabilir bağlantıları gösterir.

Kullanıcıları randomuser.me adresinden alabilirsiniz. Bu ücretsiz bir API'dir ve rastgele kullanıcı verileri sağlar. API'yi sorgulamak için https://randomuser.me/api adresine bir GET isteği gönderin ve döndürmek istediğiniz kullanıcı sayısını sorgu parametresi olarak ekleyin. Örneğin, https://randomuser.me/api?results=19 adresine gönderilen bir GET isteği, 19 kullanıcının bir listesini döndürecektir. İstek tarafından döndürülen nesne aşağıdaki gibi bir yapıya sahiptir (bu durumda, results parametresi 1 olarak ayarlanmıştır):

{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Gustav",
        "last": "Christiansen"
      },
      "location": {
        "street": {
          "number": 64,
          "name": "Skovbrynet"
        },
        "city": "Askeby",
        "state": "Danmark",
        "country": "Denmark",
        "postcode": 67407,
        "coordinates": {
          "latitude": "-36.0259",
          "longitude": "-50.4015"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "gustav.christiansen@example.com",
      "login": {
        "uuid": "5160b12a-bcd1-4e33-94e2-03a6a1a88364",
        "username": "tinydog101",
        "password": "deluxe",
        "salt": "TVZh5olg",
        "md5": "779faf341daac5cebb4033a49e492def",
        "sha1": "d96ff3e60731a11aa8550be0d655dc1361051e4b",
        "sha256": "4216310874a49ce2ddf9bee9fc3803e55558fa209cf602c4b388182b1445134d"
      },
      "dob": {
        "date": "1957-05-22T19:09:09.258Z",
        "age": 65
      },
      "registered": {
        "date": "2013-03-10T08:23:54.944Z",
        "age": 9
      },
      "phone": "61655243",
      "cell": "92661700",
      "id": {
        "name": "CPR",
        "value": "220557-1358"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
      },
      "nat": "DK"
    }
  ],
  "info": {
    "seed": "06d65bd1ae788c54",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}

Ayrıca, API'yi tarayıcınızda denemenizi ve sonucun yapısını gözlemlemenizi öneririm; yanıtın daha okunabilir olması için format=pretty adında ek bir sorgu parametresi belirtmek faydalı olabilir.

Parent bileşen, kullanıcı verisini aldıktan sonra bu veriyi temizlemeli ve alt bileşene iletmelidir. Temizlenmiş prop, her biri bir kullanıcının adını, yaşını ve e-postasını içeren nesnelerin bir dizisi olmalıdır. Verileri kullanarak kullanıcı adları, yaşları ve e-postalarını çıkarmalı ve alt bileşene bu temizlenmiş veriyi prop olarak iletmelisiniz.Netlik için yukarıdaki dizinin temizlenmiş versiyonu aşağıdaki gibi olacaktır:


[
  {
    "name": "Gustav Christiansen",
    "age": 5,
    "email": "gustav.christiansen@example.com"
  }
]

Bu soru, API isteği yapma, veriyi işleme, prop iletişimi ve sayfalama mantığını anlama yeteneğinizi değerlendirmeyi amaçlar. İstenilen bileşenleri oluştururken prop geçişi ve temiz veri çıkarma konularına dikkat etmelisiniz.


 -->
