https://tronik-peach.vercel.app/

<!-- Bir doküman veya belirli bir konteyner içinde herhangi bir yerde gerçekleşen bir olayı dinlemek için tek bir olay işleyicisi kullanabileceğinizi ve ardından event.target aracılığıyla olayın hedefi hakkında bilgi alabileceğinizi unutmayın. Daha sonra bu bilgiyi güncellemeniz gereken state'i güncellemek için kullanabilirsiniz.

İşlenecek yalnızca üç tür olay olduğundan ( mouse tuşunun aşağı gitmesi, bilgisayar tuşunun aşağı gitmesi ve bilgisayar tuşunun yukarı gitmesi), yalnızca üç olay işleyicisi olması gerekir ve olayların tümü "main" div kapsayıcısına eklenebilir, çünkü olayların tümü orada bir yerde gerçekleşecektir.

Bir kullanıcının bilgisayar klavyesindeki belirli bir tuşa aşağı mı yoksa yukarı mı bastığını nasıl dinleyeceğinizi merak ediyorsanız, önce bunun nasıl yapılacağını Google'da arayın. Bu yaygın bir sorudur ve hızlı bir şekilde birçok yanıt bulacaksınız (bazıları aşırı karmaşık çözümler sunar, bu nedenle daha basit olanlara odaklanın).

Bundan sonra hala takıldıysanız, başka bir ipucu için 50. satıra ilerleyin










































Bu olayları dinlemek için "main" konteyner div'ine onKeyUp ve onKeyDown ekleyebilirsiniz. Olay işleyicinize aktarılan olay nesnesi içinde, olayın "key" özelliğine bakarak aşağı veya yukarı giden anahtarı belirleyebilirsiniz.

-->
