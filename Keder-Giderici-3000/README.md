https://keder-giderici-3000.vercel.app/

<!-- Bir API'nin nasıl kullanılacağını anlamak için API'nin belgelerini okumak, API ile çalışmanın başlıca zorluklarından biridir, bu nedenle AP_Documentation.md dosyasını okumak ve burada ne yapacağınızı düşünmek için kendinize biraz zaman verin.

Unutmayın ki kodlamayla ilgili herhangi bir şey için dokümantasyon okumanız gerektiğinde çoğu zaman dokümantasyonun çoğu elinizdeki görevle ilgisizdir, bu nedenle önemli olan metni taramak, ilgili kısmı bulmak ve geri kalanını görmezden gelmektir.

Bir sayfa yüklendiğinde bir API'den veri getirirken, getirme işlemini useEffect içinde yürütmeniz gerektiğini unutmayın.

savedActivityKeys üzerinden yineleme yapmak ve her bir key için veri almak için bir array yöntemi kullanabilirsiniz.

Daha sonra bu verileri JSON'dan bir JavaScript nesnesine dönüştürmeniz gerekir; bu nesne activitiesData state array'ine eklenebilir.

Nesneleri, her biri hazır olur olmaz teker teker veya hepsi hazır olur olmaz hepsini aynı anda state array'e ekleyebilirsiniz. Hangi yaklaşımı tercih ederseniz kullanın.

Bunun nasıl yapılacağını bulmak buradaki temel zorluktur, bu yüzden biraz düşünmek, denemek ve Google'da arama yapmak için kendinize biraz zaman tanıyın. Hala takıldıysanız, daha fazla ipucu için 50. satıra ilerleyin (spoiler uyarısı).




































Verileri getirmeniz ve bu verileri her bir key için activities state array'e eklemeniz gerekir. Bunu yapmanın bir yolu, tam olarak bu cümlede söyleneni yapmaktır: *her* key için veri getirin ve ekleyin. Başka bir deyişle, forEach yöntemini kullanarak key'leri tek tek inceleyin, onlar için veri getirin ve state dizisine eklemek için bu verilerle ne yapmanız gerekiyorsa yapın ( array'e önceki getirmeler ve eklemeler zaten gerçekleşmiş olabileceğinden, zaten orada olabilecek verileri korumayı unutmayın).

Alternatif olarak (ve muhtemelen daha verimli bir şekilde), key'leri eşleyebilir, state array'e ekleyeceğiniz tüm nesneleri içeren yeni bir array oluşturabilir ve ardından bunları bir kerede state array olarak ayarlayabilirsiniz. Bunun için Promise.all() yöntemi oldukça faydalı olacaktır. Bkz. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

 -->
