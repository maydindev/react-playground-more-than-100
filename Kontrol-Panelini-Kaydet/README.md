https://kontrol-panelini-kaydet-tan.vercel.app/


<!-- local storage'a kaydetmeniz gereken tek şey state nesnesinin kendisidir. Bunun bir state değeri olduğu gerçeğini fazla düşünmeyin - kendi içinde, diğerleri gibi sadece bir JS nesnesidir ve diğerleri gibi localStorage'a kaydedilebilir. Bunu vanilya JavaScript'te yaptığınız gibi yapabilirsiniz.

useEffect aracılığıyla local storage'a nasıl kaydetmeniz gerektiğini veya kaydedip kaydetmemeniz gerektiğini merak ediyorsanız, bu konudaki React dokümanlarını okumayı düşünebilirsiniz: https://react.dev/learn/you-might-not-need-an-effect


Bir kullanıcının adını console.log yapmak istediğimizi düşünün. Takma adını (userNickname) kullanmayı tercih ederiz, ancak takma adı yoksa, bunun yerine adını (userFirstName) kullanmak isteriz. (Takma adlarının verilerimize kaydedilmiş olabileceğini ya da olmayabileceğini, ancak adlarının kaydedileceğinin garanti olduğunu varsayalım).

Kodumuzu şu şekilde yazabiliriz: console.log(userNickname || userFirstName)

Bu şekilde, bu değişkende saklanan herhangi bir değer varsa console.log(userNickname); aksi takdirde console.log userFirstName olacaktır.

Bu görevi tamamlamak için benzer bir mantık kullanabilirsiniz

Aşağıya bir göz atın (ya da terimi Google'da kendiniz arayın - bu kelimenin tam anlamıyla aldığım ilk arama sonucu!): https://stackoverflow.com/questions/58539813/lazy-initial-state-what-it-is-and-how-to-use-it

 -->
