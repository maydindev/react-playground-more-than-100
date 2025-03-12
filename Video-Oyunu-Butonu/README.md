https://video-oyunu-butonu-1-ten.vercel.app/

<!-- Butonun bir onClick olay işleyicisine ihtiyacı var. Bununla ilgili daha fazla bilgiyi React dokümantasyonunda bulabilirsiniz: https://react.dev/learn/responding-to-events

setGameRunning önceden bildirildiği için, kullanıcı butona her tıkladığında çağrılmasını sağlamanız yeterli olacaktır

Yeni değer önceki değerin tersi olmalıdır. Geçerli değere doğrudan gameRunning state üzerinden erişebilir ve mantıksal "not" operatörünü (ünlem işareti !) kullanarak bir boolean değerini tersine çevirebilirsiniz. Örneğin:

    let exampleValue = true

    let exampleValue = !exampleValue

exampleValue şimdi false değerine eşittir.


Bunu butonun içindeki (butonun açılış ve kapanış etiketleri arasındaki boşlukta) ternary operatörü ile yapabilirsiniz .

Bunu yapmanın başka yolları da olduğunu unutmayın; bu şekilde yapmak *zorunda* değilsiniz (Ancak bunu yapmanın en kısa yolu budur.) -->
