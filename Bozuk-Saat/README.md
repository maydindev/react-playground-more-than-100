https://bozuk-saat-three.vercel.app/

<!-- Saati almak için bir fonksiyon zaten sizin için yazılmıştır: getTime. Uygulamanın saati görüntülemek için ihtiyaç duyduğu tüm verileri içeren bir değer döndürür.

Bu değer state olarak ayarlandıktan sonra (zaten başlangıçta olduğu gibi), kodun geri kalanı değeri saat üzerinde görüntülenen verilere ayrıştırmakla ilgilenir, bu nedenle bu konuda başka bir şey yapmanıza gerek yoktur.

Sorun basitçe, bu işlemin tekrar tekrar değil yalnızca bir kez (başlatma sırasında) gerçekleşiyor olması, dolayısıyla saatin güncellenmiyor olmasıdır.

Zamanın başlangıçta nasıl ayarlandığına dikkat edin: const [time, setTime] = useState(getTime)

Bu nedenle, yeni bir zaman ayarlamak için getTime fonksiyonunu setTime'a aktarmanız yeterlidir. getTime fonksiyonunun return değeri, uygulamanın "time" olarak adlandırılan state olarak ayarlanmasını beklediği değerdir.

Zamanı güncellemek için, bazı kodları belirli zaman aralıklarında tekrar tekrar çalıştırmanız gerekir. Başka bir deyişle, bu setInterval için mükemmel bir iştir (bunu setTimeout ile de yapabilirsiniz - her iki yaklaşım da kabul edilebilir, ancak setInterval daha uygun olacaktır).

Ancak setInterval veya setTimeout'un React'te düzgün çalışmasını sağlamak içinuseEffect() içinde kullanmanız gerekir.

Daha fazla bilgi için React belgelerine bakın:

   https://react.dev/learn/synchronizing-with-effects

Saati güncellemek için başlatmanız gereken belirli bir arka plan işlemi vardır. Counter 1'in üzerine çıkarsa, uygulamayı kapattıktan sonra arka plan işlemi devam ediyor demektir. Ardından, yeniden açtığınızda, arka plan işleminin başka bir örneği başlatılır ve bu böyle devam eder ve uygulamayı her kapatıp yeniden açtığınızda daha fazla örneğe yol açar.

Uygulama kapatıldığında arka plan sürecini "kapatmak" veya "iptal etmek" veya "silmek" (tabiri yerindeyse) için belirli bir kod satırı yazmanız gerekir.

Daha fazla spoiler vermemek için burada yapmanız gerekenler için kesin bir kelime kullanmıyorum ve bilerek belirsiz davranıyorum. Ne demek istediğim hakkında hiçbir fikriniz yoksa, 70. satıra ilerleyin



    🚨 🚨 🚨 Spoiler Uyarısı! 🚨 🚨 🚨

    Daha fazla ipucu için 70. satıra ilerleyin








































Zamanı güncellemek için setInterval veya setTimeout yöntemini kullanıyorsanız, counter 1'in üzerine çıkmasını önlemek için iki şey yapmanız gerekir:

    1. Yöntemi useEffect() içinde kullanın.

    2. useEffect içindeki interval veya timeout'u temizleyin.

Daha fazla bilgi için React belgelerine bakın: https://react.dev/learn/synchronizing-with-effects

 -->
