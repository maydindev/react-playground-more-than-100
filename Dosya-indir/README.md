https://dosya-indir-nine.vercel.app/


<!-- React'e özgü değildir, dosya girdileriyle ilgili MDN sayfası tüm öznitelik seçeneklerinin iyi bir özetini verir: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

React'te bir <input />'un kendi kendine kapanan bir etiket olduğunu unutmayın.

Buradaki temel zorluklardan biri budur, bu nedenle düşünmek, Google'da aramak ve deney yapmak için kendinize biraz zaman tanıyın. Eğer hala takıldıysanız, bir ipucu için 54. satıra kadar ilerleyin (spoiler uyarısı).
















































Bu sayfada bunun nasıl yapılacağına dair genel bir bakış bulunmaktadır: https://web.dev/read-files/

'event.target.files' hakkında konuşan kısımlara özellikle dikkat edin (sayfada bunu arayın).


Kullanıcının seçtiği her dosya için, filesToUpload state array'indeki nesnelerden biri olacak bir nesne oluşturmanız gerekir. Böyle bir durumla karşılaştığınızda:


        [item1, item2, item3]   --------------------------------------  [newItem1, newItem2, newItem3]
                 ilk array'i temel alan yeni array üretmek isteniyor.....
                 map yöntemi için mükemmel bir zaman.

*Ancak*, dosyalar hakkında bilgi aldığınızda, bu bilgiler bir array içinde olmayacaktır. FileList (https://developer.mozilla.org/en-US/docs/Web/API/FileList) adı verilen ve yukarıdakileri yapmadan önce bir array'e dönüştürmeniz gereken bir nesne türünde olacaktır.

Dosya girişini nasıl kontrol edeceğinizi merak ediyorsanız, cevap: yapamazsınız. Dosya girişleri kontrolsüz olmalıdır.

Bakınız: https://react.dev/reference/react-dom/components/input
  -->
