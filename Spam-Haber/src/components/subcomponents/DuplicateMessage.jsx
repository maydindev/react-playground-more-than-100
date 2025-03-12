export default function DuplicateMessage(props) {
  return (
    <p>
      E-mail adresi, <span className='email'>{props.userEmail}</span>, zaten
      posta listeme abone olmuş durumda. Bültenimi bu kadar çok sevdiğiniz ve
      tekrar kaydolmak istediğiniz için teşekkür ederim. Teşekkürümün bir
      göstergesi olarak, size ayda sadece 5 $ karşılığında premium bültenime
      abone olmanız için <span>tek seferlik bir teklif </span>göndereceğim
    </p>
  )
}
