https://sorgulanabilir-teal.vercel.app/

<!-- Her şeyi bir kerede yapmaya çalışmayın. Küçük ve basit bir şekilde başlayın ve son ürüne doğru adım adım ilerleyin.

Örneğin, kullanıcı üç form öğesinden birindeki girdisini değiştirdiğinde, bu öğelerden herhangi birindeki geçerli verileri console.log'a kaydetmeyi hedefleyerek başlayabilirsiniz. Bunu nasıl yapacağınızı bulabilirseniz, zaten son çizgiye giden yolda ilerliyorsunuz demektir!

O zaman kendinize sorun: Bu verilerle ne yapmam gerekiyor? Ve bunu yapmak için neye ihtiyacım var?

Yorumlar bölümünün şu anda nasıl çalıştığına dair büyük resmi anlamak da yardımcı olabilir. PostData dosyasındaki comments array'ine bakın ve her yorumun yapıldığı ham maddeleri gözden geçirin. Hangi içeriğin eklenmesi ve hangi formatta eklenmesi gerektiğine dair bir fikir edinmek için diziye manuel olarak yeni bir yorum oluşturmak (veya sadece eklediğinizi hayal etmek) yardımcı olabilir.

Ardından, verilerin postData dosyasından sayfada işlenmeye kadar izlediği genel yola bir göz atın. Bunun ayrıntıları hakkında endişelenmenize gerek yoktur (örneğin, veriler PostComments veya PostContent bileşenlerine aktarıldıktan sonra ne olur). Sadece üzerinde çalıştığınız DebatePost bileşeninde neler olup bittiğine dair genel bir anlayışa ihtiyacınız vardır.

Spoiler uyarısı. Tüm bu ipucu çok şey ele veriyor, bu yüzden bakmadan önce bunu iyice düşünmeyi ve/veya Google'da daha fazla arama yapmayı düşünün. Görmek için ⬇️ ️50. satıra ilerleyin 🚨






































Üç form öğesinin ( text input, textarea ve checkbox) her biri için eklemeniz gereken üç şey vardır:

    - onChange
    - name
    - value ( text input ve textarea için) veya checked (checkbox için)

onChange, formdaki herhangi bir değişikliği işleyecek bir fonksiyona ayarlanmalıdır. Bu fonksiyonu kendiniz ayarlamanız gerekecektir.

name, bir form öğesini diğerinden ayıran ve içine girilen verilerle ilgili bir sözcük olmalıdır (örneğin, "userName").

Bunu kontrollü bir form haline getirmek için Value (Değer) veya checked (Kontrol edildi) belirli bir şekilde ayarlanmalıdır. Kodunuza yeni başladığınızda, bu destekleri form öğelerinizin dışında bırakmak ve bunlara daha sonra geri dönmek yararlı olabilir.


Kullanıcı forma bilgi girerken, bu girdinin bir yerde saklanması, girdi değiştikçe güncellenmesi ve sayfaya işlenmesi gerekir. Sayfaya işlenen verileri saklamanız ve güncellemeniz gerekiyorsa, React'te genellikle neye ihtiyacınız vardır?

useState() aracılığıyla form verileri için bir state ayarlamanız gerekir.

Ayrıca kullanıcı forma bilgi girdikçe bu state'i güncellemeniz gerekir. Buradaki soru şudur: Formdan state'e nasıl veri alırsınız? İlk etapta bu verilere nasıl erişeceksiniz?

Burada kendinize sormanız gereken bir diğer önemli soru da bu state'in nasıl başlatılması gerektiğidir. Eğer dikkatli olmazsanız, bir hata mesajı alabilirsiniz. Neyse ki, bu hata mesajı yararlı bir ipucu içerir

🚨 Spoiler uyarısı! Daha fazla ipucu ister misiniz? ️️⬇️ 100. satıra kaydırın 🚨




























Her form öğesine bir onChange prop eklemeniz ve bunu yine oluşturmanız gereken bir değişiklik işleme fonksiyonuna eşit olarak ayarlamanız gerekir.

onChange'i hangi fonksiyona eşitlerseniz, otomatik olarak argüman olarak bir olay nesnesi alacaktır. Fonksiyon içinde, event.target.value veya event.target.checked aracılığıyla elemanın içindeki geçerli bilgiye erişebilirsiniz (fonksiyonunuzda event nesnesine "event" parametre adını verdiğinizi varsayarsak - ancak, "e" gibi istediğiniz herhangi bir adı verebilirsiniz).

Bilginin hangi öğeden geldiğini bilmek için, öğeye bir name niteliği de vermeniz gerekecektir. Daha sonra event.target.name aracılığıyla isme erişebileceksiniz.

Daha sonra state'i güncellemek için bu iki bilgi parçasını ( name ve value ya da checked özelliği) kullanabilirsiniz ve güncellenmeyen diğer form öğelerindeki bilgileri koruduğunuzdan emin olun.

Tüm bunları çalışırken görmek ve nasıl çalıştığını anlamak için, değişiklik işleme fonksiyonu içindeki iki bilgi parçasını ve form verilerinizi ayarladığınız state'i console.log olarak kaydetmek yararlı olabilir.

Formun kendisine (gönder butonu yerine) bir onSubmit prop eklemeniz gerekecektir. Bu, formun gönderilmesini yöneten bir fonksiyona ayarlanmalıdır. Bu fonksiyonu kendiniz ayarlamanız gerekecektir.

Bir formun varsayılan davranışını ve bunun olmasını önlemek için ne yapmanız gerektiğini hatırlayın.

Varsayılan davranış sayfayı yenilemektir. Olay nesnesi otomatik olarak onSubmit'e bağlı fonksiyona aktarılır, bu nedenle bu nesne üzerinde preventDefault() fonksiyonunu çağırmanız yeterlidir.

Kendinize sorun: mevcut yorumlar nereden geliyor? comment array'inde yeni bir yorumun görünmesi için ne olması gerekir? Bu yeni yorumun nereye gitmesi gerekir? Ve form bu yorumu oraya nasıl ulaştırabilir?

Kullanıcı formu doldurur ve "gönder" butonuna tıklarsa, formdan toplanan veriler, ek bir bilgi de içeren tek bir nesne olarak comments array'e gönderilmelidir.

Bu ek bilginin ne olduğunu bulmak için, postData comments array'deki mevcut yorumlara bakın ve yorumunuzda eksik bir şey olup olmadığına bakın.
Kontrollü bir formda (kontrollü bileşenlerden oluşan bir form), formun değerleri bu durumdan bağımsız olmak yerine ilgili React state'i tarafından kontrol edilir. Sonuç olarak, iki kaynak (form ve state) yerine yalnızca bir "doğruluk kaynağı" vardır.

Bu konuda daha fazla bilgi için React dokümanlarına bakın: https://react.dev/reference/react-dom/components/form

Diyelim ki state'inizi formun verisi olarak ayarladınız, ona formData adını verdiniz ve belirli bir noktada aşağıdaki gibi görünüyordu:

      {userName: "something", commentText: "somethingElse", isAnonymous: false}

Bu durumda, kullanıcı adı form öğesinin değerinin formData.userName değerine eşit olmasını ve diğer iki form öğesi için de benzer şeyleri yapmak istersiniz (onay kutusu için önemli bir farkla).

"Gönder" e her tıkladığınızda sayfa yeniden mi başlıyor?

Bir listedeki her çocuğun benzersiz bir "key" özelliğine sahip olması gerektiği hakkında bir hata mesajı almaya devam ediyor musunuz? comments array'ine eklediğiniz yorumların verilerini, array'de zaten bulunan yorumların verileriyle karşılaştırın. Sizin yorumlarınızda eksik olan ne var?

 -->
