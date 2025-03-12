https://sanal-ortamda-gezinti-one.vercel.app/

<!-- offsetx ve y'yi, henüz bakmadıysanız bunu nasıl yapacağınızı Google'dan araştırın. Hala takıldıysanız, daha fazla ipucu için 50. satıra ilerleyin.


🚨 Spoiler uyarısı! Daha fazla ipucu ister misiniz? ️️⬇️ 50. satıra kaydırın 🚨













































Bunu Google'da aradığınızda, aşağıdaki gibi bir referans sayfasına ulaşabilirsiniz:

     https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX

     veya

     https://www.w3schools.com/jsref/event_offsetx.asp

Burada bulacağınız talimatlar vanilla JS'e yöneliktir. React'te çalışmazlar. React'te biraz farklı yapmanız gereken bir şey var.

Bunu Google'da arayın. Bunu zaten yaptıysanız ve hala takıldıysanız, daha fazla ipucu için 100. satıra ilerleyin.


🚨 Spoiler uyarısı! Daha fazla ipucu ister misiniz? ️️⬇️ 100. satıra kadar aşağı kaydırın 🚨




































Events hakkındaki React belgelerini (https://reactjs.org/docs/events.html) okuyun, SyntheticEvent kavramlarına ve nativeEvent niteliğine özellikle dikkat edin!

🚨 Spoiler uyarısı! Daha fazla ipucu ister misiniz? ️️⬇️ 150. satıra kaydırın 🚨















































React'te olaylar SyntheticEvent'e sarılır. OffsetX ve offsetY verilerini almak için, bunlara vanilla JS'de yaptığınız gibi doğrudan olayın kendisinden değil, olayın nativeEvent özelliğinden erişmeniz gerekecektir.

Yine, tüm bunlar React dokümantasyonunda tartışılmaktadır

Ayrıca bu Stack Overflow gönderisinde de okuyabilirsiniz: https://stackoverflow.com/questions/31519758/reacts-mouseevent-doesnt-have-offsetx-offsety


-->
