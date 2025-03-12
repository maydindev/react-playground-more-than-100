https://hava-durumu-app-iota.vercel.app/

<!-- Uygulamanın sahip olması gereken 3 state var: (1) Pazartesi, (2) Salı ve (3) Çarşamba günlerine ait hava durumu verileri - weatherData array'indeki üç nesne.

İlk state, ilk nesne olarak ayarlanmalı ve uygulama, state olarak ayarlanan diğer iki nesneyi de barındırabilmelidir.

Mevcut JSX'e bazı JS değişkenlerinin eklenmesi gerekecek, böylece JSX sabit kodlu olmak yerine array'den veri oluşturacaktır. Bu bazı özel sözdizimi gerektirecektir.

İlgili className'i değiştirmek için mevcut JSX'e bir miktar JS eklemek gerekecek ve bu da bazı özel sözdizimi gerektirecektir.

Koşullu mantık gerektirecektir. Mantığı nasıl yazacağınıza dair birden fazla seçeneğiniz var. Hangisini tercih ederseniz onu kullanmakta özgürsünüz.


Uygulamanın sahip olması gereken üç olası state vardır: (1) Pazartesi, (2)Salı ve (3) Çarşamba günlerine ait hava durumu verileri - weatherData array'indeki üç nesne.



Başlangıç koşulu ilk nesne olmalıdır. Kullanıcı "Test" butonuna bastığında, uygulama durumu bir sonraki güne/nesneye değiştirmelidir.

Son state ise, ilk state'e dönmeli ve ardından döngüyü tekrarlamalıdır.



🚨 Hala takıldınız mı? SPOILER UYARISI! 🚨

⬇️ Başka bir ipucunu ortaya çıkarmak için 70. satıra kaydırın ⬇️













































Array'ler 0 indeksli olduğundan, temel olarak state'i weatherData[0], weatherData[1] veya weatherData[3] olarak ayarlamanız yeterlidir.

Kullanıcı butona tıkladığında, indeks numarası şu şekilde değişmelidir:

            0 -> 1
            1 -> 2
            2 -> 3
            3 -> 0
            gibi.

Her nesnenin ID numarası dizideki index numarasına karşılık geldiğinden, index numarasını belirlemek için ID numarasını kullanabilir ve ardından yukarıdaki modeli izleyerek bir sonraki numaranın ne olması gerektiğini belirlemek için bazı koşullu mantık kullanabilirsiniz.



React kodunun, bileşenlerin içine öğeler yerleştirilerek modüler veya birleştirilebilir hale getirilebileceğini unutmayın. Bu bileşenler daha sonra ayrı dosyalar halinde düzenlenebilir ve bunlar istenildiği gibi içe ve dışa aktarılabilir.

Veriler de içe ve dışa aktarılabilir.

 -->
