https://pookemon-neon.vercel.app/

<!-- Bu, gerçek koda dalmadan önce pseudo kodda bir şeyler yazmanın yardımcı olabileceği bir challenge. Kodunuzu kısa ve anlaşılır bir şekilde yazmaya çalışmadan önce ayrıntılı bir şekilde yazmak da yardımcı olabilir. Daha sonra her zaman yeniden düzenleyebileceğinizi unutmayın

İşte size bu işe başlamanız için cevaplamanız gereken bazı sorular:

        1. Hangi koşullar altında Pookachu'nun xPosition değerine 1 eklemelisiniz?
        2. Hangi durumlarda onun xPosition değerinden 1 çıkarmalısınız?
        3. Aynı soruları yPozisyonu için de tekrarlayın.
        4. Soruları önce pseudo code/normal metinde cevaplayın. Daha sonra bunları koda çevirmeye başlayın.

Alternatif olarak veya buna ek olarak, fonksiyonun çalışması için ihtiyaç duyduğunuz "bileşenlerin" bir listesini yazmak yardımcı olabilir. İşini yapmak için neyi "bilmesi" gerekiyor? Hangi bilgi parçalarına güveniyor? Bu bilgi zaten doğrudan mevcutsa nereden elde edebilirsiniz? Ve doğrudan mevcut değilse nasıl türetebilirsiniz?

Bir örnek için 50. satıra ilerleyin (spoiler uyarısı).





































Bilmeniz gereken bir bilgi, Pookachu'nun baktığı yöndür. Bu bilgi parçasına doğrudan pookachu.direction özelliği aracılığıyla erişilebilir.

Bilmeniz gereken diğer bilgiler arasında kontrol etmeniz gereken sınırın ekseni, kontrol etmeniz gereken eksenin maksimum veya minimum değeri, güncellemeniz gereken Pookachu'nun xPosition veya yPosition olup olmadığı (hareket etmek istediği yönde hareket etmesine izin veriliyorsa) ve bu konuma 1 eklemeniz mi yoksa 1 çıkarmanız mı gerektiği yer alır.

Bu bilgilerin hiçbiri doğrudan mevcut değildir, ancak hepsi pookachu.direction özelliğinden türetilebilir. Örneğin, yönü "right" ise (sağa bakıyorsa), kontrol etmek istediğimiz x ekseninin maksimum değeridir ve bu yönde hareket etmesine izin veriliyorsa, xPosition değerine 1 eklemek isteriz.

Fonksiyonun nasıl çalışması gerektiğinin mantığını anlamakta güçlük çekiyorsanız ve/veya bazı örnekler istiyorsanız, 100. satıra ilerleyin (spoiler uyarısı)











































Pookachu sağa bakıyorsa, mevcut xPosition değeri boundaries.xAxis.max değerinin altındaysa xPosition değerini güncellemeniz gerekebilir. Maksimum değerin altındaysa, xPosition değerini +1 artırırsınız (veya başka bir deyişle, pookachu.xPosition'ın yeni değerini önceki değer artı 1 yaparsınız). Aksi takdirde, Pookachu zaten x ekseninde olabileceği maksimum değerde olduğu için xPosition aynı kalmalıdır. Her iki durumda da yPosition ve pookachu state nesnesinin diğer özellikleri (direction ve wantsToMove) korunmalıdır.

Pookachu'nun bakabileceği diğer üç yön için mantık, aşağıdaki ayarlamalarla hemen hemen aynıdır:

    - Sola bakıyorsa, Pookachu'nun xPosition değerini ancak ve ancak mevcut xPosition değeri boundaries.xAxis.max değerinin üzerindeyse -1 azaltırsınız.

    - Aşağı bakıyorsa, yalnızca mevcut yPozisyonu boundaries.yAxis.max değerinin altındaysa yPozisyonunu +1 artırırsınız.

    - Yukarı bakıyorsa, yalnızca mevcut yPozisyonu boundaries.yAxis.min değerinin üzerindeyse yPozisyonunu -1 azaltırsınız.


Pookachu'nun konumu güncelleniyor gibi görünmesine rağmen güncellenmiyor mu? Ya da sınırlarını aşıp aşmadığını kontrol ediyor olmanıza ve aşmaması gerekiyor gibi görünmesine rağmen sınırlarını aşıyor mu?

Eğer öyleyse, işte size başka bir soru: Doğrudan pookachu state'inden türetilen değerleri doğrudan updateFunction pozisyonunun içinde mi kullanıyorsunuz? Eğer öyleyse, setPookachu fonksiyonunun içine aktarabileceğiniz önceki state değerlerini kullanmayı denerseniz daha şanslı olabilirsiniz (örneğin, setPookachu(prev => prev.yourValueHere)).


 -->
