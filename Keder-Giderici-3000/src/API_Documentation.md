Bored API, sıkıldığınızda yapacak bir şeyler bulmanıza yardımcı oluyor. Sonuçlarınızı daraltmanıza yardımcı olan katılımcı sayısı, etkinlik türü ve daha fazlası gibi alanlar vardır.

Bununla yapabileceğiniz bazı şeyler:

1. Rastgele bir etkinlik alın

   Örnek Talep: https://www.boredapi.com/api/activity

   Response:
   {
   "activity": "Learn Express.js",
   "accessibility": 0.25,
   "type": "education",
   "participants": 1,
   "price": 0.1,
   "link": "https://expressjs.com/",
   "key": "3943506"
   }

2. Key'ine göre bir aktivite bulun

   Örnek Talep: https://www.boredapi.com/api/activity?key=5881028

   Response:
   {
   "activity": "Learn a new programming language",
   "accessibility": 0.25,
   "type": "education",
   "participants": 1,
   "price": 0.1,
   "key": "5881028"
   }

3. Belirli bir türe sahip rastgele bir etkinlik bulun

   Örnek Talep: https://www.boredapi.com/api/activity?type=recreational

   Response:
   {
   "activity": "Learn how to play a new sport",
   "accessibility": 0.2,
   "type": "recreational",
   "participants": 1,
   "price": 0.1,
   "key": "5808228"
   }

4. Belirli sayıda katılımcı ile rastgele bir etkinlik bulun

   Örnek Talep: https://www.boredapi.com/api/activity?participants=1

   Response:
   {
   "activity": "Learn how to fold a paper crane",
   "accessibility": 0.05,
   "type": "education",
   "participants": 1,
   "price": 0.1,
   "key": "3136036"
   }

5. Belirli bir fiyatı olan bir etkinlik bulun

   Örnek Talep: https://www.boredapi.com/api/activity?price=0.0

   Response:
   {
   "activity": "Hold a yard sale",
   "accessibility": 0.1,
   "type": "social",
   "participants": 1,
   "price": 0.0,
   }
