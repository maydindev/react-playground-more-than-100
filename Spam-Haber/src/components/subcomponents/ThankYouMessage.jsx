export default function ThankYouMessage(props) {
  return (
    <div className='thank-you'>
      <p>
        Önümüzdeki 60 saniye içinde{' '}
        <span className='email'>{props.userEmail}</span> adresine bir karşılama
        e-postası gönderilecektir.
      </p>
      <p>
        önümüzdeki beş dakika içinde e-postanın onay bağlantısını tıklarsanız,{' '}
        <span>hayatta bir kez karşınıza çıkacak bir fırsat</span>{' '}
        kazanacaksınız.
      </p>
    </div>
  )
}
