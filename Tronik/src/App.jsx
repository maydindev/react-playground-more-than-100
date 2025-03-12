import { useState, useEffect, useCallback, useMemo } from "react";
import Settings from "./components/Settings";
import Keys from "./components/Keys";
import "./styles.css";
export default function App() {
  const [currentInstrument, setCurrentInstrument] = useState("piano");
  const [playbackRate, setPlaybackRate] = useState(10);
  const [volume, setVolume] = useState(50);
  const [loop, setLoop] = useState(false);
  const [loopingNotes, setLoopingNotes] = useState([]);
  const [showKeys, setShowKeys] = useState({
    musicKeys: false,
    computerKeys: false,
    noKeys: true,
  });

  const [synthKeys, setSynthKeys] = useState([
    {
      keyName: "c2",
      displayName: "c2",
      computerKey: "a",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "c-sharp",
      displayName: "c#",
      computerKey: "w",
      color: "black",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "d",
      displayName: "d",
      computerKey: "s",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "d-sharp",
      displayName: "d#",
      computerKey: "e",
      color: "black",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "e",
      displayName: "e",
      computerKey: "d",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "f",
      displayName: "f",
      computerKey: "f",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "f-sharp",
      displayName: "f#",
      computerKey: "t",
      color: "black",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "g",
      displayName: "g",
      computerKey: "g",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "g-sharp",
      displayName: "g#",
      computerKey: "y",
      color: "black",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "a",
      displayName: "a",
      computerKey: "h",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "a-sharp",
      displayName: "a#",
      computerKey: "u",
      color: "black",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "b",
      displayName: "b",
      computerKey: "j",
      color: "white",
      active: false,
      keyPressed: false,
    },

    {
      keyName: "c3",
      displayName: "c3",
      computerKey: "k",
      color: "white",
      active: false,
      keyPressed: false,
    },
  ]);

  const activeKey = synthKeys.find((key) => key.active);

  if (activeKey) {
    playNote(`./sounds/${currentInstrument}/${activeKey.keyName}.mp3`);
    setSynthKeys((prevKeys) =>
      prevKeys.map((key) =>
        key === activeKey ? { ...key, active: false } : key
      )
    );
  }

  function playNote(note) {
    let audio = new Audio(note);
    audio.volume = volume / 100;
    audio.playbackRate =
      playbackRate <= 10 ? playbackRate / 10 : playbackRate - 9;
    audio.loop = loop;
    audio.play();
    loop && setLoopingNotes([...loopingNotes, audio]);
  }

  const propsBundle = {
    currentInstrument,
    setCurrentInstrument,
    playbackRate,
    setPlaybackRate,
    volume,
    setVolume,
    loop,
    setLoop,
    loopingNotes,
    setLoopingNotes,
    showKeys,
    setShowKeys,
  };

  /* Challenge

	Bu synth klavyede önemli bir şey henüz çalışmıyor: Tuşlar. Göreviniz, kullanıcının tuşları mouse tuşu ya da bilgisayar klavyesi ile aşağıdaki şekilde oynatmasına izin vermektir:  
	
		1. Bir kullanıcı mouse tuşu veya bilgisayar tuşu ile bir synth tuşu çaldığında, synthKeys state array içinde synth tuşunun ilgili nesnesinin active özelliği true olarak ayarlanmalıdır. 
		   
				   - Bir synth tuşunun mouse tuşu ile çalınması, synth tuşu üzerinde mouse tuşunun basılı tutulması (*tıklanmaması*) anlamına gelir. 
					 
				   - Bir synth tuşunu bir bilgisayar tuşuyla çalmak, synthKeys state dizisindeki synth tuşunun karşılık gelen computerKey özelliği tarafından tanımlandığı gibi, ona karşılık gelen bilgisayar tuşuna basmak anlamına gelir. 
				
		2. Kullanıcı bir bilgisayar tuşuna basarak bir synth tuşunu çalarsa, synth tuşunun synthKeys state array'deki karşılık gelen nesnesinin keyPressed özelliği de true olarak ayarlanmalıdır. Kullanıcı bilgisayar tuşunu kaldırdığında, keyPressed özelliği tekrar false olarak ayarlanmalıdır. 
		   
		3. Nesnenin diğer tüm özellikleri ve synthKeys state array'deki diğer tüm nesneler, state her güncellendiğinde korunmalıdır. Yalnızca hedeflenen nesnenin active özelliği ve (varsa) keyPressed özelliği değiştirilmelidir. 

		4. Görevi tamamlamak için yalnızca aşağıdaki üç olay işleyicisi için kod yazmalısınız. Projenin başka hiçbir yerinde başka bir kod değiştirilmemeli veya eklenmemelidir. Görevi bitirmeden önce key'lerde hata olup olmadığını da kontrol etmelisiniz. Bir kullanıcının onunla nasıl etkileşime gireceğini simüle etmek için üzerinde biraz müzik çalın. 
		   
		Not: QWERTY olmayan bir klavyeniz varsa, synthKey state dizisindeki computerKey özelliklerini klavye düzeniniz için daha anlamlı olan bilgisayar tuşlarıyla değiştirebilirsiniz

		İpucu: "main-container" div'ine onClick={(e)=>console.log(e.target)} ekleyin ve altta yatan DOM'u tanımak için tuşlara tıklayın ya da bileşenler klasöründeki Keys bileşenine bakın.  

				Saldırı Planı:
				
			2. Olayları yorumlayın
				- Ne tür bir olay? 
				- Olay synthkey state nesnelerinden birine karşılık geliyor mu? 
				- Eğer öyleyse, hangisi? (Buna hedef nesne deyin.)
				
			3. synthKeys state dizisini güncelleyin. 
				- Hedef nesneyi güncelleyin. 
					- mouseDown veya keyDown -> hedef nesnenin active özelliği = true 
					- keyDown -> ayrıca -> hedef nesnenin keyPressed özelliği = true 
					- keyUp -> hedef nesnenin keyPressed özelliği = false 

*/

  //Tuşa basılı tutulmaması için tanımlanan flag
  let isKeyDown = false;

  function handleKeyDown(e) {
    if (!isKeyDown) {
      setSynthKeys((prev) =>
        prev.map((key) =>
          key.computerKey === e.key.toLowerCase() && !key.active
            ? { ...key, active: true, keyPressed: true }
            : key
        )
      );
      isKeyDown = true;
    }
  }

  function handleKeyUp(e) {
    setSynthKeys((prev) =>
      prev.map((key) =>
        key.computerKey === e.key.toLowerCase()
          ? { ...key, keyPressed: false }
          : key
      )
    );
    isKeyDown = false;
  }

  function handleMouseDown(keyName) {
    setSynthKeys((prev) =>
      prev.map((key) =>
        key.keyName === keyName && !key.active ? { ...key, active: true } : key
      )
    );
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        className="main-container"
        //onClick={(e)=>console.log(e.target)}
        onMouseDown={(e) => handleMouseDown(e.target.dataset.note)}
      >
        <Settings {...propsBundle} />
        <Keys showKeys={showKeys} synthKeys={synthKeys} />
      </div>
    </div>
  );
}

//Neden useeffect kullandık?
/*Klavye olaylarını yönetmek için: useEffect içinde keydown ve keyup event listener'larını ekliyoruz ve kullanıcı klavyedeki tuşlara bastığında bu olayların yakalanmasını sağlıyoruz.
Temizleme işlemi: Bileşen unmount olduğunda veya useEffect tekrar çalıştığında event listener'ları temizleyerek bellek sızıntılarını (memory leak) ve performans sorunlarını önlüyoruz.
Yalnızca ilk render'da çalışması için: Boş bağımlılık array'i ([]) ile sadece ilk render'da useEffect'i çalıştırıyoruz.*/

//useeffect kullanmasak?
/*
Evet, useEffect kullanmadan da klavye olaylarını dinleyebilirdik, ancak bunu yapmak React'in temel prensiplerine aykırı olurdu ve yönetilebilirliği, performansı etkileyen sorunlara yol açabilirdi. 
Klavye Olaylarını Bileşen Dışında Yakalayamama:
Eğer useEffect kullanmazsak ve doğrudan window.addEventListener çağrısını bileşenin render olduğu fonksiyonun içine koyarsak, her render işleminde bu event listener yeniden eklenir. Bu durumda, bileşen her render olduğunda yeni event listener'lar eklenir, ama eski event listener'lar kaldırılmadığı için her tuşa basıldığında birden fazla event listener aynı anda tetiklenir. Bu performans sorunlarına ve bellek sızıntılarına neden olur.
Temizleme (Cleanup) İmkanı Olmazdı:
React'te bileşenler her render olduğunda yeniden çalıştırılır. Eğer event listener'ları doğrudan bileşen fonksiyonunun içine koyarsak, bileşen kaldırıldığında (unmount olduğunda) bu event listener'lar temizlenmez. Bu da, özellikle büyük uygulamalarda bellek sızıntılarına ve işlevsellik sorunlarına neden olabilir.
Örneğin, kullanıcı farklı bir sayfaya geçiş yaptığında eski sayfanın event listener'ları hala aktif olur, bu da gereksiz yere kaynak tüketir. useEffect bu sorunu, bileşen kaldırıldığında (unmount) event listener'ları temizleyerek (remove) çözer.
Performans Sorunları:
Bileşen her render edildiğinde, sürekli olarak yeni event listener eklemek ve bu listener'ları temizlememek, performansı olumsuz yönde etkiler. Özellikle kullanıcı klavyede hızlıca birden fazla tuşa bastığında, her tuşa basışında birden fazla event listener tetiklenebilir, bu da uygulamanın yavaşlamasına neden olur.
useEffect, bu event listener'ları sadece bileşen DOM'a ilk kez yüklendiğinde ekleyerek, gereksiz yeniden yüklemelerin önüne geçer ve uygulamanın daha verimli çalışmasını sağlar.
React'in Deklaratif Yapısına Uymak:
React, bileşen tabanlı ve deklaratif bir yapı kullanır. Bu yapıda yan etkiler (side effects) useEffect ile yönetilir. Doğrudan window.addEventListener ve window.removeEventListener gibi işlemleri bileşenin ana fonksiyonunun içine koymak, React'in bu deklaratif yapısına ters düşer. useEffect ile yan etkiler uygun bir şekilde izole edilir ve kontrol altına alınır.
*/

//fare olayını neden useeffecte dahil etmedik?
/*
Bileşen Tabanlı Olay Yönetimi:
React'te bileşen bazlı olay yönetimi tercih edilir. Bu, bir HTML elementine (örneğin button) doğrudan bir olay bağlamanın en temiz ve önerilen yöntem olduğu anlamına gelir. Örneğin, fare olayını useEffect içinde yönetmeye çalışmak yerine, olayın gerçekleştiği her button için onMouseDown eklemek daha mantıklıdır:
Her button elementine tıklandığında, sadece o tuşla ilgili olay tetiklenir.
Olayları doğrudan ilgili elemente bağlayarak, hangi elementin tıklandığını kolayca anlayabiliriz (e.target ile), bu da daha basit ve anlaşılır bir kod yapısı sağlar.
Sadece İlgili Elementin Olayını Dinlemek:
Fare olayını useEffect içine koymak, tüm pencere (window) seviyesinde bir event listener eklemeye yol açabilir. Yani sayfa genelinde her yerde fare tıklamalarını dinlemek yerine, yalnızca ilgili button elemanında fare tıklamasını dinlemek istiyoruz.
Eğer useEffect içinde bir mousedown olayı eklersek, fare tıklaması sayfanın herhangi bir yerinde olsa bile bu olay tetiklenebilir. Oysa bizim istediğimiz, sadece belirli button elementine fare ile tıklandığında olayın tetiklenmesidir.
Bu nedenle, fare olayını doğrudan button elementine yerleştirmek, olayın yalnızca o button için tetiklenmesini sağlar.
React'in Olay Yakalama (Event Delegation) Mantığı:
React, DOM üzerinde etkin olay dinleme yönetimini optimize etmek için event delegation (olay yetkilendirme) kullanır. Yani, olayları bir üst seviyede dinler ve sonra ilgili alt elementlerde tetikler. Eğer bir elemente fare olayı (onMouseDown) eklersek, React bu olayı zaten performanslı bir şekilde yönetir.
Eğer fare olayını useEffect içine koyup, window.addEventListener('mousedown', ...) ile yönetmeye kalkarsak, React'in bu optimize edilmiş olay yönetimi devre dışı kalır ve sayfa genelinde gereksiz yere olay dinleyicileri eklenmiş olur.
Fare Olayı useEffect'e Uygun Değil:
useEffect, genellikle bileşen yüklendiğinde (mount) veya güncellendiğinde (update) tek seferde bazı işlemleri yapmak için kullanılır. Ancak fare olayı gibi sık etkileşimli olaylarda, herhangi bir tuşa tıklanması anında bu olayı yönetmek istediğimiz için onMouseDown'ı doğrudan elemente yerleştirmek daha uygundur.
Ayrıca, fare olayları bileşenle sıkı bir şekilde bağlıdır, yani kullanıcı bir tuşa tıkladığında sadece o tuşla ilgili bir işlem yapılır. useEffect genelde global olaylar için (örneğin klavye olayları gibi) veya yan etkiler (side effects) için daha uygundur.
*/
