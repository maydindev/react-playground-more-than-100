https://yasal-dosya-indirme-seven.vercel.app/

<!--
new Date() yazarak tarihi almanız ve ardından bunuLocaleString'e dönüştürmeniz gerekir.

Konum bilgisini almak bu görevin en zor kısmıdır. Aynı zamanda kullanıcının butona tıklamasıyla tetiklenen olaylar zincirinde gerçekleşmesi gereken ilk şeydir. Bu nedenle bu görevle başlamanızı ve kodunuzu buradan oluşturmanızı öneririm.

Konum bilgisini almak için bir API kullanmanız gerekecektir.

Bunu Google'da aramanızı, kendi başınıza bir API bulmanızı ve nasıl yapacağınızı anlamak için belgeleri okumanızı öneririm, çünkü gerçek dünyada developer olarak yapacağınız şey budur. Bunun nasıl yapılacağına dair daha fazla ipucu istiyorsanız, aşağıdaki 50. satıra ilerleyin.





🚨 Spoiler uyarısı! Daha fazla ipucu ister misiniz? ️️⬇️ 50. satıra kaydırın 🚨



































https://ipapi.co/ adresindeki API'yi kullandım.

İhtiyacınız olan bilgileri bu API'den basitçe https://ipapi.co/json/ adresinden veri getirerek alabilirsiniz.

Bunun sonucunda, userData state'inde tarayıcı nesnesine entegre edilmesi gereken bir veri nesnesi döndürülür.

State'i ayarlamadan önce bu veriye ihtiyacımız olduğundan, temel olarak şu şekilde işleyebiliriz: veriyi getir -> veriyi ayrıştır -> userData state'ini ayrıştırılmış veriyle (ve talimatlarda belirtilen diğer değerlerle) ayarla.

Eğer tercihiniz ya da zorunluluğunuz dışında farklı bir API kullanıyorsanız (belki de benim kullandığım API artık çalışmıyor ya da bakımı yapılmıyor), buna göre ayarlamalar yapmanız gerekecektir, ancak prosedür aşağı yukarı benzer olacaktır.


 -->
