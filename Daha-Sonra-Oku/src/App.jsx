import { useState } from 'react'
import './styles.css'
import Header from './components/Header'
import Article from './components/Article'
import archivedArticles from './data/archivedArticles'
import favoritedArticles from './data/favoritedArticles'
import savedArticles from './data/savedArticles'
import trashedArticles from './data/trashedArticles'

export default function App() {
  const [articleQueue, setArticleQueue] = useState(savedArticles)

  const stats = getStats()

  const articleComponents = articleQueue.map((articleData) => {
    return <Article articleData={articleData} key={articleData.id} />
  })

  const noArticlesMessage = (
    <p className='no-articles-message'>burada gösterilecek makale yok.</p>
  )

  function getStats() {
    return {
      numOfFavorites: favoritedArticles.length,
      numOfArchived: archivedArticles.length,
      numOfTrashed: trashedArticles.length,
    }
  }

  function getTargetArticle(id) {
    return savedArticles.find((item) => item.id === id)
  }

  function removeFromSavedArticles(targetArticle) {
    const targetIndex = savedArticles.indexOf(targetArticle)
    savedArticles.splice(targetIndex, 1)
  }

  /*-----State Ayarlama Fonksiyonları-------------------------------------------*/

  function favorite(id) {
    const targetArticle = getTargetArticle(id)
    if (favoritedArticles.includes(targetArticle)) {
      const targetIndex = favoritedArticles.indexOf(targetArticle)
      favoritedArticles.splice(targetIndex, 1)
    } else {
      favoritedArticles.push(targetArticle)
    }
    setArticleQueue([...savedArticles])
  }

  function archive(id) {
    const targetArticle = getTargetArticle(id)
    removeFromSavedArticles(targetArticle)
    archivedArticles.push(targetArticle)
    setArticleQueue([...savedArticles])
  }

  function trash(id) {
    const targetArticle = getTargetArticle(id)
    removeFromSavedArticles(targetArticle)
    if (favoritedArticles.includes(targetArticle)) {
      const targetIndex = favoritedArticles.indexOf(targetArticle)
      favoritedArticles.splice(targetIndex, 1)
    }
    trashedArticles.push(targetArticle)
    setArticleQueue([...savedArticles])
  }

  function toggleExpand(id) {
    const targetArticle = getTargetArticle(id)
    targetArticle.expanded = !targetArticle.expanded
    setArticleQueue([...savedArticles])
  }

  /*-------------------------------------------------------------------------*/

  /* Challenge

    Her makale için bulunan dört buton da çalışmıyor. Göreviniz bunları aşağıdaki gibi ayarlamaktır: 
    
        1. "articles-container" div'ine tek bir onClick olay işleyicisi eklemelisiniz. Projeye başka hiçbir olay işleyici eklenmemelidir. Olay işleyici, aşağıdakileri yapmak için butonların "button-type" ve "article-id" data niteliklerini kullanmalıdır: 
          
         eğer butonun             O zaman butonun 
			   "button-type"          "article-id" veri değerini
			   data değeri:            aşağıdakileri yapmak için:      				   
		 	╷---------------------╷-----------------------------╷					
	    |      "favorite"     |	      favorite(idValue)     |
			|---------------------|-----------------------------|
			|      "archive"      |	    archive(idValue)        |
			|---------------------|-----------------------------|
			|       "trash"       |	      trash(idValue)        |
      |---------------------|-----------------------------|
			|    "toggleExpand"   |	  toggleExpand(idValue)     |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	
			                      idValue = "article-id" data niteliğinin değeri. 
								            	 Bu sadece açıklama amaçlıdır - bu şekilde adlandırmak zorunda değilsiniz
			        
    2. Yukarıda listelenen ilk üç fonksiyon zaten çalışmaktadır ve değiştirilmemelidir. Ancak, toggleExpand fonksiyonu (satır 71) şu anda bozuk ve düzeltilmesi gerekiyor. Bunu düzeltmek için *sadece* çok küçük (ama önemli) bir değişiklik yapmanız gerekiyor. Sorunun tam olarak ne olduğunu ve çözümünüzün bunu neden düzelttiğini tanımlamaya ve ifade etmeye çalışın.  
		   
		3. Olay işleyicisi için kodunuz, okunabilirliği korurken mümkün olduğunca kısa ve DRY (Kendinizi Tekrar Etmeden) olmalıdır. 
		
		4. Doğru çalıştığından emin olmak için uygulamayı test etmelisiniz. Yukarıdaki görevleri tamamladıktan sonra, daha fazla butonuna tıkladığınızda bir makale genişlemeli, kalp şeklindeki favori butonuna tıkladığınızda açılıp kapanmalı ve arşiv veya çöp kutusu butonuna tıkladığınızda makale kaybolmalıdır. Uygulamanın üst kısmındaki sayılar da favorilere eklediğiniz, arşivlediğiniz veya çöpe attığınız makale sayısını yansıtmalıdır. 
		   
		Bonus Görev: Yukarıda listelenen dört fonksiyon kuruldukları şekilde çalışacak olsalar da (dördüncüyü düzelttikten sonra), alışılmışın dışında ve tartışmalı bir şekilde "yanlış" giden bir şey var - React Dokümantasyonunun karşı uyardığı bir şey. Bakalım ne olduğunu bulabilecek misiniz.  
 */


  const handleClickButton = (e) => {
    const buttonType = e.target.dataset.buttonType
    const articleId = e.target.dataset.articleId

    console.log(buttonType)
    console.log(articleId)
    
    if (!buttonType || !articleId) return

    /*articleId değerini bir tam sayıya dönüştürür. parseInt fonksiyonu, bir stringi belirtilen tabanda (radix) bir tam sayıya dönüştürmek için kullanılır.
    Burada ikinci argüman olarak 10 verilmiştir, bu da tabanın (radix) 10 olduğunu belirtir. Yani bu işlem, articleId string'ini ondalık (decimal) bir sayıya dönüştürür.*/
    //Fakat burada buna iihtiyaç yok çünkü id ler metin.
    //const id = parseInt(articleId,10)

    if(buttonType === "favorite") {
      favorite(articleId)
    } else if(buttonType === "archive"){
      archive(articleId)
    } else if(buttonType === "trash") {
      trash(articleId)
    } else if (buttonType === "toggleExpand") {
      toggleExpand(articleId)
    }
  }

  return (
    <div className='wrapper'>
      <Header stats={stats} setArticleQueue={setArticleQueue} />
      <div onClick={handleClickButton} className='articles-container'>
        {articleQueue.length > 0 ? articleComponents : noArticlesMessage}
      </div>
    </div>
  )
}
