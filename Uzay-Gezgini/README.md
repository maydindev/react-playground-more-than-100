https://uzay-gezgini-ten.vercel.app/

<!-- Nereden başlayacağınızı bilmiyorsanız, uygulamanın daha basit bir sürümüyle başlamayı deneyin ve ilk başta sadece zamanlayıcıya odaklanın. Zamanlayıcının ilkel bir versiyonuyla başlayın ve daha sonra kademeli olarak daha karmaşık hale getirin:

    1. Uygulama yüklendiğinde zamanlayıcının sadece saniyeleri geri saymasını sağlayın. Başlat butonunun başlatması veya 0'da durması konusunda endişelenmeyin. Bırakın otomatik olarak ilerlesin ve negatif sayılara geçsin.

    2. Sadece butona basıldığında geri saymaya başlasın.

    3. 0'da durmasını sağlayın.

    4. Tekrar basıldığında zamanlayıcıyı ve skoru sıfırlasın.

    5. Bu ana görevler tamamlandıktan sonra daha kolay yerine oturacak olan diğer görevlere geçin.

JavaScript'te kodun yürütülmesini zamanlamanın iki yolu vardır: setInterval ve setTimeout. Her iki seçenekle de bu zorluğu tamamlamanın birden fazla yolu vardır. setInterval tartışmasız bu görev için daha uygundur, ancak istediğinizi kullanmakta özgürsünüz.

Her ikisinin de "kutudan çıktığı gibi" çalışmayacağını ve vanilla JS'de kullandığınız şekilde kullanmaya çalışırsanız yapmalarını istediğiniz şeyi yapmayacaklarını unutmayın. React ile doğru şekilde çalışmalarını sağlamak için bazı ayarlamalar yapmanız gerekecek.

🚨 Spoiler uyarısı Daha fazla ipucu ister misiniz? ️️⬇️ 50. satıra kaydırın 🚨
































setInterval ve setTimeout'un her ikisi de web API'leridir. Bu nedenle, bunları kullanmak için React'in "dışına çıkmanız" ve yan etkiler üreten harici (React için) bir sistemle etkileşime girmeniz gerekir. React'te, bu nedenle React'in "dışına çıkmanız" gerektiğinde yapmanız gereken standart bir şey var.

🚨 Spoiler uyarısı Daha fazla ipucu ister misiniz? ️️⬇️ 100. satıra kaydırın 🚨
















































useEffect() kullanmanız gerekir. Daha fazla bilgi için  Reacts Docs'a bakın:

    https://react.dev/learn/synchronizing-with-effects

    https://react.dev/reference/react/useEffect

 Son bağlantıda zamanlayıcı içeren bir örnek içeren bir bölüm olduğunu unutmayın:

   https://react.dev/reference/react/useEffect#connecting-to-an-external-system

 Ancak, belgenin önceki bölümlerini okursanız daha anlamlı olacaktır

🚨 Spoiler uyarısı! Daha fazla ipucu ister misiniz? ️️⬇️ 150. satıra kadar aşağı kaydırın 🚨





































setInterval veya setTimeout kullanarak timeLeft değerini her saniye 1 azaltmanız gerekir. Pseudo kodda bu aşağıdaki gibi görünecektir:

     let timeLeft = 60

     1 saniye -> timeLeft - 1 // timeLeft şimdi = 59
     1 saniye -> timeLeft - 1 // timeLeft şimdi = 58
     1 saniye -> timeLeft - 1 // timeLeft şimdi = 57
     vb.

Vanilla JS'de bu çok kolay olacaktır. Sadece şöyle bir şey yazabilirsiniz:

    let timeLeft = 60

    setInterval(()=> {
        timeLeft = timeLeft - 1
     }, 1000)

Ancak React'te bazı ek karmaşıklıklar var. Yeni başlayanlar için, timeLeft bir state değeridir, bu nedenle yukarıdaki kodu yazarsanız, doğrudan state'i değiştirmiş olursunuz. Bunun yerine setTimeLeft kullanarak state'i güncellemeniz gerekir.

Ayrıca, setInterval ve setTimeout web API'leridir, bu nedenle bunları useEffect() içinde kullanmanız gerekir.

Son olarak, useEffect'in hangi bağımlılığı veya bağımlılıkları alması gerektiğini düşünmeniz gerekir, böylece ne zaman çalışacağını ve hangi değer(ler)i kullanacağını bilir. Önceki ipucundaki bağlantılara bakın - özellikle bu bölüm: https://react.dev/reference/react/useEffect#specifying-reactive-dependencies


Zamanlayıcının çalışıp çalışmadığını temsil eden halihazırda mevcut bir state vardır. Kullanıcı başlat butonuna tıkladığında zamanlayıcıyı başlatmak için bu durumun değerini değiştirmelisiniz, böylece kodunuzun diğer kısımları zamanlayıcının çalışmaya başlaması gerektiğini "bilecektir".

 Kodunuz timerRunning === true veya false değerine göre zamanlayıcının çalışıp çalışmayacağını "bilmelidir". Kullanıcı başlat butonuna tıkladığında true olarak ayarlanmalıdır. Daha sonra mantığınızın geri kalanını timerRunning değeri etrafında oluşturabilirsiniz.


 Zamanlayıcının çalışıp çalışmadığını temsil eden zaten mevcut bir state vardır. timeLeft === 0 olduğunda durdurmak için, bu koşul (timeLeft === 0) doğru olduğunda değerini değiştirmelisiniz, böylece kodunuzun diğer bölümleri zamanlayıcının artık çalışmaması gerektiğini "bilecektir".

  Kodunuz timerRunning === true veya false değerine göre zamanlayıcının çalışıp çalışmayacağını "bilmelidir". timeLeft === 0 olduğunda false olarak ayarlanmalıdır. Daha sonra mantığınızın geri kalanını timerRunning değeri etrafında oluşturabilirsiniz.

 Ancak, doğrudan yazamazsınız ( pseudo kodda): "timeLeft 0'a eşitse, timerRunning'i false olarak ayarla." Bunu denerseniz, aldığınız hata mesajına bakın ve bunun neden olduğunu ve bunu nasıl önleyebileceğinizi düşünün.

TimerRunning'in değerini değiştirerek App bileşeninin state'ini değiştirmiş olursunuz, bu da tüm kodunu yeniden çalıştıracağınız anlamına gelir. Eğer sadece " eğer timeLeft 0'a eşitse, timerRunning'i false olarak ayarla" şeklinde bir koşul yazarsanız, bu kod satırı bir sonraki render işleminde tekrar çalışacak, bu da state'i tekrar güncelleyecek ve bu şekilde sonsuz bir döngüye yol açacaktır.

TimerRunning'i oyunun sonunda yalnızca bir kez false olarak ayarlamak ve bunu tekrar tekrar yapmamak için koşulunuzu değiştirmeniz gerekir. Şöyle düşünün: timerRunning'i hangi koşullar altında false olarak ayarlamak istiyorsunuz? Sadece *sadece* timeLeft === 0 olduğunda mı? Yoksa dikkate almanız gereken başka bir şey mi var? (İpucu: cevap evet.)

 timerRunning'i false olarak ayarlamanın tüm amacı, timeLeft === 0 olduğunda, timerRunning'in hala true olarak ayarlanmış olması ve false olarak ayarlanması gerektiğidir. Yanlış olarak ayarlandıktan sonra, zaten yanlış olduğu için tekrar yanlış olarak değiştirmek için bir neden kalmaz. Bu nedenle kontrol etmek istediğiniz diğer koşul timerRunning'in mevcut değeridir.

 Oyunun sonunda, timeLeft === 0 ve score === bazı sayılar (kullanıcı ne kadar puan aldıysa). Oyunu yeniden başlatmak için, kullanıcı "başlat" butonuna tekrar bastığında bu değerlerin orijinal değerlerine sıfırlanması gerekecektir. Bu başlangıç değerlerinin dosyanın en üstünde STARTING_TIME ve STARTING_SCORE değişkenleri olarak zaten saklandığını unutmayın, bu nedenle tekrar kullanılabilirler ve kullanılmalıdırlar

Bonus olarak aşağıdakilerden birini veya daha fazlasını ekleyebilirsiniz:
    - Bir "oyun bitti" / "tekrar oyna" ekranı.
    - Oyun başlamadan önce bir geri sayım (3, 2, 1, başla!)
    - localStorage aracılığıyla en iyi skorları kaydedin ve görüntüleyin.
    - Kullanıcının adını girmesine izin verin.
    - Kullanıcı lazer atışı yapar ve hedefi vurmazsa puanları silin.
    - Kullanıcının müzik ve ses efektlerini kapatıp açmasına izin verin.
    - Kullanıcının oyunun ne kadar süreceğini özelleştirmesine izin verin.
    - Farklı zorluk seviyeleri oluşturun (daha fazla gemi ve/veya gemiler daha hızlı gider).
    - Oyunu oyuncu tarafından kontrol edilen bir uzay gemisi ile yukarıdan aşağıya, "ateş et" kaydırma aracı olarak yeniden yapın.

Diğer fikirler:
    - Temayı değiştirin.
    - Uygulamayı daha responsive hale getirin.
    - Mouse butonu basılı tutulduğunda lazerin görünmeye devam etmesini engelleyin.


 -->
