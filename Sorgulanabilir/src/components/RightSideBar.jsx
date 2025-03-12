export default function RightSideBar() {
  const debateElements = [
    'ChatGPT: İyi mi Kötü mü?',
    'Köpekler Kedilere Karşı',
    'Vue vs. React',
    'Tuvalet Kağıdı: Fazla mı Az mı?',
    'CSS Grid vs. Flex',
    "T. Rex Brontosaurus'a karşı",
    "JS'de noktalı virgül: Evet mi Hayır mı?",
  ].map((question) => <button key={crypto.randomUUID()}>{question}</button>)

  return (
    <div className='right-side-bar'>
      <div className='right-side-bar-inner-container'>
        <div className='search-container'>
          <img src='/images/icons/search.svg' />
          <input />
        </div>
        <h3>Gündemdeki Tartışmalar</h3>
        {debateElements}
      </div>
    </div>
  )
}
