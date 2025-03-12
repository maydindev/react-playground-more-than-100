https://orijinal-hesap-makinesi-livid.vercel.app/

<!-- currentCalc state'i hakkında bilgi edinin. State'in yapısını anlamak için INITIAL_State ve/veya console.log currentCalc kısmına bakın. Her bir görev için talimatlara uygun olarak nasıl güncellenmesi gerektiği konusunda daha iyi bir fikir edinmenizi sağlayacaktır.


İşte kodun ilerleyen kısımlarındaki state ayarlama fonksiyonlarından biri:

                 setCurrentCalc(prevCalc => ({
        			    currentNum: [],
        			    previousNum: prevCalc.currentNum,
        			    operation: opFromClick,
        			    result: []
        		    }))

Başka bir ifadeyle, currentCalc state'ini aşağıdaki şekilde güncelleyin:

                a. currentNum değeri boş bir array olmalıdır.

                b. previousNum değeri, state'in önceki versiyonunun currentNum değeri olmalıdır

                c. İşlemin değeri opFromClick (handleClick fonksiyonunun üst kısmında tanımlanan bir değişken) olmalıdır.

                d. result değeri boş bir array olmalıdır.

İşte başka bir örnek:

                setCurrentCalc(prevCalc => ({
        			    ...prevCalc,
        			    operation: opFromClick
        		}))

currentCalc state'i aşağıdaki gibi güncelleyin:

                a. "operation" opFromClick değerine sahip olmalıdır.

                b. önceki state'e ait tüm özellikler korunmalıdır.

Talimatları takip etmek için ayarlamalar yapmanız gerekecek olsa da, bu örnekleri görevler için kodunuzu yazarken benzetme olarak kullanabilirsiniz.


Görev-1

Bu görev için koşullardan herhangi biri doğruysa (conditionOne, conditionTwo, vb.), kullanıcı aşağıdaki durumlardan birini gerçekleştiriyor demektir:

        - daha önce herhangi bir değer girilmemiş bir hesaplamaya başlıyor ve ilk sayıyı girmeye başlıyor.
          - veya halihazırda devam etmekte olan bir hesaplama için bir sayı giriyordur.

Örneğin, currentCalc'ın tüm dizileri boşsa ve işlem tanımsızsa, yani kullanıcı henüz hiçbir şey girmemişse (veya önceki tüm girişleri silmişse) conditionOne true olur.

Her durumda, kullanıcı bir sayı butonuna tıkladıysa ve bu koşullardan herhangi biri söz konusuysa, kullanıcının o anda oluşturmaya başladığı veya devam ettiği sayı için bir rakam girmeye çalıştığı varsayılabilir.

Bu görev için yazdığınız state setting fonksiyonu currentCalc state'inin kullanıcının o anda girmeye çalıştığı sayının (currentNum) string ve array tabanlı gösterimini kullanıcının yazdığı sayı (numFromClick) ile güncellerken, varsa operatör ve önceki sayı gibi hesap makinesinin ihtiyaç duyduğu diğer değerleri de kaydedecektir.

Örneğin, kullanıcının şimdiye kadar sadece "1", "2" ve "3" rakamlarını yazdığını varsayalım. Sanal hesap makinesi ekranında kullanıcı 12 rakamını görecek ve currentCalc state'i aşağıdaki gibi görünecektir:

    {
        currentNum: ["1", "2"],
        previousNum: [],
        operation: undefined,
        result: []
    }

Kullanıcı şimdi "3" yazarsa, state aşağıdaki gibi güncelleneceği için ekranda 123 gösterilecektir:

    {
        currentNum: ["1", "2", "3"],
        previousNum: [],
        operation: undefined,
        result: []
    }

Görev-2

Burada test edilen koşul, currentNum, previousNum ve result array'lerinin tümünün girişlere sahip olduğu ve işlemin tanımlandığı conditionFive'dir.

Bu koşul yalnızca kullanıcı zaten bir hesaplamayı tamamlamışsa doğrudur. Bu görev için yazdığınız state setting fonksiyonu currentCalc state'i sıfırlarken aynı zamanda yeni bir hesaplama için yeni bir sayı başlatacaktır.

Örneğin, kullanıcının "1", "5", "+", "2", "5", "=" yazarak 15 + 25 hesaplamasını tamamladığını varsayalım. currentCalc state aşağıdaki gibi olacaktır:

    {
        currentNum: ["2", "5"],
        previousNum: ["1, "5"],
        operation: "+",
        result: ["4", "0]
    }

Kullanıcı şimdi "7" yazarsa, yeni bir hesaplama başlatmak istediği varsayılabilir, bu nedenle "7" rakamı currentNum olarak kaydedilmeli ve diğer tüm özellikler aşağıdaki gibi yeniden başlatılmalıdır:

    {
        currentNum: ["7"],
        previousNum: [],
        operation: undefined,
        result: []
    }

INITIAL_STATE değişkenini kullanmak bize sadece bunu yapmak için bir kısayol sağlar. Bu şekilde, özellikleri manuel olarak yeniden başlatmak zorunda kalmayız.

Görev-3

Bu durum, bir kullanıcı 1 + 2 + gibi bir dizi yazarsa gerçekleşir. Şu anda bir sonuç (3) ve önceden yazılmış ve kaydedilmiş bir işlem (+) vardır. Kullanıcı şimdi başka bir sayı yazmaya başlarsa, uygulama kullanıcının yeni sayıyı sonuca eklemek istediğini varsayar ve bu da bazı yeniden karıştırma işlemleri gerektirir.
 -->
