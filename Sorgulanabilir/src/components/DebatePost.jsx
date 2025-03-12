"use-client"
import { useState, useEffect } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlerse "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/

  const [comments, setComments] = useState(postData.comments)
  const [userNameInput,setUserNameInput] = useState("")
  const [commentText,setCommentText] = useState("")
  const [isAnonymousCheck, setIsAnonymousCheck] = useState(false)

  useEffect(() => {
    console.log(userNameInput);
    console.log(commentText);
    console.log(isAnonymousCheck);
    console.log(comments);
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      id: crypto.randomUUID(),
      userName: userNameInput,
      isAnonymous: isAnonymousCheck,
      commentText: commentText
    }
    setComments([...comments, newComment])
    setUserNameInput("")
    setCommentText("")
    setIsAnonymousCheck(false)
  }

  return (
    <div className='post-container'>
      <PostContent data={{ ...postData, comments }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className='text-input'
          type='text'
          value={userNameInput}
          required={isAnonymousCheck ? "" : true}
          onChange={(e) => setUserNameInput(e.target.value)}
          placeholder='Kullanıcı adı girin.'
        />
        <textarea onChange={(e) => setCommentText(e.target.value)} value={commentText} 
        required 
        placeholder='Ne düşünüyorsunuz?' />
        <label>
          <input className='checkbox' type='checkbox' 
          checked={isAnonymousCheck ? true : false}
          onChange={(e) => setIsAnonymousCheck(e.target.value)}/>
          İsimsiz mi göndereyim?
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  )
}
