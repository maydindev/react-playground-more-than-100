https://frontend-kart-rose.vercel.app/


<!-- İleride büyük spoiler var. Eğer gerçekten yardıma ihtiyacınız varsa 50. satıra kadar ilerleyin
















































Burada birkaç farklı şeyi takip etmeniz gerekiyor:

    - Kart şu anda açık mı yoksa kapalı mı?

	    - Eğer açıksa, o zaman sadece "cover" div'inde mouse butonunun aşağı inmesini dinlemeniz ve bu olay gerçekleştiğinde "open" class'ını kaldırmanız gerekir.

	    - Kapalıysa, ""cover" div'inde aşağı inen mouse butonunu ve aşağıdakileri de dinlemeniz gerekir:

		    - Butonun ilk indiği anda imlecin konumu neydi?

		    - Mouse butonu hala aşağıda mı ve imleç hareket ediyor mu?

		    - Öyleyse, geçerli konum nedir ve ilk konumun 50 piksel solunda mı?

            - Eğer öyleyse, ""cover" div'ine "open"" class'ını uygulayın.

		    - Aksi takdirde, 50 piksel eşiğine ulaşılana kadar veya kullanıcı mouse butonunu kaldırana kadar (eşiğe ulaşmadan önce kaldırırsa) değişiklikleri dinlemeye ve izlemeye devam edin.

    Bunları nasıl yapacağınızı düşünmek için kendinize zaman tanıyın ve gerekirse Google'da biraz araştırma yapın. Hala takıldıysanız, daha fazla ipucu için 100. satıra ilerleyin (spoiler uyarısı).































Kullanmanız gereken üç olay dinleyicisi vardır: onMouseDown, onMouseUp, onMouseMove. Her biri, durumunuzu belirli bir şekilde güncelleyen bir olay işleyicisine ihtiyaç duyacaktır.

    Ayrıca takip etmeniz gereken bilgilerin kaydını tutmak için bir state oluşturmanız gerekecektir. Bunu etkili bir şekilde yapmanın muhtemelen birden fazla yolu vardır, ancak benim kullandığım, üç soruyu yanıtlayan üç özelliğe sahip tek bir nesneydi:

            1. Mouse butonu aşağıda mı?

            2. Kart şu anda açık mı?

            3. Kullanıcı mouse butonuna ilk tıkladığında imlecin x eksenindeki konumu neydi?


 -->
