https://interview-07-sigma.vercel.app/

<!--
Bu soruda, rastgele kullanıcıların aranabilir bir listesini render etmenizi istiyoruz. Kullanıcı verilerini almak için "https://randomuser.me/api?results=number" adresine GET isteği göndererek verileri alabilirsiniz. Bu API, geliştirme için kimlik doğrulama gerektirmeyen ücretsiz bir API'dir. Ancak, aşırı talep gönderirseniz istekleriniz engellenebilir, bu nedenle sadece birkaç kullanıcı verisi için sorgu yapmanızı öneririm.

Verilerin bir örneği, `DATA` adı altında paylaşılmıştır. Bu örnekte, her bir kullanıcının bazı bilgileri yer almaktadır.

const DATA = {
  results: [
    {
      gender: "female",
      name: { title: "Miss", first: "Sara", last: "Johnson" },
      location: {
        street: { number: 6263, name: "Kingsway" },
        city: "Winchester",
        state: "West Yorkshire",
        country: "United Kingdom",
        postcode: "US4C 3HD",
        coordinates: { latitude: "13.7996", longitude: "179.3694" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "sara.johnson@example.com",
      login: {
        uuid: "d703a5ff-7e73-400a-a735-f330addfcb31",
        username: "goldenzebra309",
        password: "clevelan",
        salt: "3CobdNiB",
        md5: "bd978843e8b18cd6e7424a5a18f62af5",
        sha1: "7e6bafa636c6f7245241d8a2d3e0190f9cc40b87",
        sha256:
          "224588a5360826e3495a16f16fa5007e4ef439930df47760616e2c79ca704534",
      },
      dob: { date: "1957-06-04T12:40:38.974Z", age: 64 },
      registered: { date: "2002-07-09T02:17:52.520Z", age: 19 },
      phone: "015242 69350",
      cell: "0792-242-687",
      id: { name: "NINO", value: "XP 63 26 10 L" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/64.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
      },
      nat: "GB",
    },
  ],
  info: { seed: "6bc47b82484c2761", results: 1, page: 1, version: "1.3" },
};



Bileşeni oluştururken, yalnızca "title" ve "name" alanlarına erişmeniz gerekecektir. Kullanıcıları bir liste içinde başlıklarıyla birlikte ad ve soyadlarıyla birlikte görüntülemelisiniz. Listeye, kullanıcıların adlarını filtreleyebileceğiniz bir metin input alanı eklemelisiniz. Bu input alanı, bir otomatik tamamlama aracı gibi çalışarak, girilen metne uygun adları listeleyecektir.

Bileşen, adları filtrelerken metin durumunu (input'ta ve isimlerde) dikkate almamalıdır. Yani, büyük/küçük harf duyarlılığı olmamalıdır.

Örneğin, bileşenin çalışır hali `interview7.png` adlı resim ile gösterilmiştir. Bu örnek, nasıl bir kullanıcı listesi bileşeni oluşturmanız gerektiğini göstermektedir.

Not: Örnek veriler ve resimler public'te bulunabilir. Temel işlevselliği doğru bir şekilde uygulamaya odaklanmanız önemlidir. Daha sonra ekstra özellikler eklemeye yönelebilirsiniz.
 -->
