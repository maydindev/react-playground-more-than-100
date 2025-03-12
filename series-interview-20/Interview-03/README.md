https://interview-03-delta.vercel.app/

<!--
**Görev:** Bir fonksiyonel bileşen oluşturarak, bir buton ve bir aktivite listesi görüntülemeyi hedefliyorsunuz. İlk başta, aktivite listesi boş olacak. Kullanıcı butona tıkladığında, yeni bir aktivite alınacak ve bu aktivite listeye eklenmelidir. Rastgele bir aktivite oluşturmak için "https://www.boredapi.com/api/activity" adresine GET isteği gönderilecek. Bu API, kimlik doğrulaması gerektirmeyen bir geliştirme API'sidir. Her istekte, rastgele bir aktivite nesnesi dönecektir. Bu nesnenin içerdiği alanlar şunlar olacaktır: activity, type, participants, price, link, key ve accessibility. Bu alanlar ya bir metin (string) ya da bir sayı (number) değeri taşıyacaktır.

Örnek bir aktivite nesnesi:

{
  "activity": "Köpeğinizi yürüyüşe çıkarın",
  "type": "relaxation",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "9318514",
  "accessibility": 0.2
}


Her öğe, aktiviteyi ve altında bir butonu içermelidir. Bu butona tıklandığında, aktivitenin nesnesinden kalan alanlar görüntülenmelidir. Sonuç olarak, kullanıcının son aktiviteyi genişlettiği durumu görebileceğiniz bir son ürün elde etmelisiniz.

**Notlar:**
- Fonksiyonelliğin ötesinde, sayfanın tasarımını istediğiniz gibi yapabilirsiniz.
- Bileşeniniz `useEffect()` hook'unu kullanmalıdır.
- Sayfayı daha küçük bileşenlere bölmek isteyebilirsiniz.
- Özellikle, "Generate Activity" butonuna birden fazla kez tıkladığınızda nasıl davrandığınıza dikkat edin. Önceki verileri üzerine yazma gibi bir sorunla karşılaşabilirsiniz.
- Verileri almak için `axios`, `fetch` veya diğer API çağrısı yöntemlerini kullanabilirsiniz.

---

Bu soru, temel bir React bileşeni oluşturmayı, API çağrıları yapmayı, veriyi işlemeyi ve kullanıcı etkileşimlerini yönetmeyi gerektiriyor. Aynı zamanda bileşenleri düzenli ve anlaşılır bir şekilde nasıl ayırabileceğinizi ve UI tasarımını nasıl özelleştirebileceğinizi de değerlendirecek. -->
