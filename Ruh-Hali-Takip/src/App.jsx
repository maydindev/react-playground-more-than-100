import { useState } from "react";
import diaryData from "./diaryData";
import DiaryCard from "./components/DiaryCard";
import Menu from "./components/Menu";
import "./styles.css";
export default function App() {
  /* Challenge 

İki DiaryCard elementi şu anda aşağıdaki verilerle sabit olarak kodlanmıştır. Göreviniz, diaryData.js dosyasındaki 14 günlük verinin tamamı için otomatik olarak DiaryCard elementleri oluşturmak üzere döngünün gücünü kullanmaktır. 

    1. Sabit kodlanmış DiaryCard elementlerinin her ikisi de silinmeli ve yerine toplam 14 
       otomatik olarak oluşturulan elementler eklenmeli. 
    
    2. İlk iki kart orijinal kodlanmış kartlarla aynı görünmeli ve geri kalanı 
       kartlar benzer görünmelidir. 
        
    3. Kodu kısa ve anlaşılır hale getiriniz. 
*/

  return (
    <div>
      <Menu skip={false} />
      <main className="main-container">
        <div className="sub-header">
          <h3>Nisan Raporu</h3>
        </div>

        {diaryData.map((data) => {
          return (
            <DiaryCard
              key={data.id}
              date={data.date}
              rating={data.rating}
              emotions={data.emotions}
              activities={data.activities}
              note={data.note}
            />
          );
        })}
      </main>
    </div>
  );
}

/*
<DiaryCard
          key='bu geçici bir anahtar'
          date='1 Nisan'
          rating={77}
          emotions={[
            { icon: '😊', text: ' Memnun' },
            { icon: '☺️', text: 'Rahat' },
            { icon: '🙏', text: 'Minnettar' },
            { icon: '️️️⚡️', text: 'Enerjik' },
          ]}
          activities={[
            { icon: '🏃‍♂️', text: 'Çalışıyor' },
            { icon: '️️️🧘‍♂️', text: 'Meditasyon' },
            { icon: '️✍️', text: ' Dergi' },
            { icon: '️📖', text: ' Kitap Okuma' },
            { icon: '️👪', text: 'Aile Zamanı' },
          ]}
          note={`Çok heyecan verici bir şey olmadı ama bugün oldukça güzel bir gündü. "Kendime ayırdığım zaman" ile aileme ayırdığım zaman arasında güzel bir denge kurdum ve yatağa girdiğimde kendimi çok rahatlamış ve memnun hissettim.`}
        />

        <DiaryCard
          key='bu geçici bir anahtar'
          date='2 Nisan '
          rating={96}
          emotions={[
            { icon: '😇', text: 'Gururlu' },
            { icon: '🥰', text: ' Takdir Edildi' },
            { icon: '😃', text: 'Neşeli' },
            { icon: '️🥳', text: ' Kutlamalar' },
          ]}
          activities={[
            { icon: '🏆', text: 'Kişisel Zaferi' },
            { icon: '️️️💪', text: 'Kişisel Gelişim' },
            { icon: '️🍛', text: 'İyi Yemek' },
            { icon: '️🛌', text: ' Güzel Uyku' },
            { icon: '️👪', text: 'Aile Zamanı' },
          ]}
          note={`Son üç aydır üzerinde çalıştığım büyük iş projemi nihayet bitirdim ve ekibimin bir üyesi olarak kendimi geliştirdiğimi hissediyorum.`}
        />
        */
