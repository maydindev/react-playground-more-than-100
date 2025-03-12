import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "İsviçre'nin en iyi yanı nedir?",
    id: 1,
    answer:
      'Bilmiyorum ama bayrağı büyük bir artı. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'Vücudu ve burnu olmayan birine ne denir?',
    id: 2,
    answer:
      'Kimse bilmiyor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
]

// `isOpen` state değişkenini ana bileşene ( FAQ) kaldırarak ve verileri props aracılığıyla aşağı aktararak state paylaşın
export default function FAQ() {
  const [isOpen, setOpen] = useState(/*false*/null)

  const handleClickOpen = (index) => {
    //setOpen((isOpen) => !isOpen)
    //Bu şekilde ikisi birden açılıp kapanıyor.
    //Ayrı ayrı açılıp kapanmasını sağlamak için kodu aşağıdaki şekilde değiştirdim.
    setOpen(prev => (prev === index ? null : index))
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Sıkça sorulan sorular
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {faqs.map((faq,index) => (
              <Accordion key={faq.id} faq={faq} isOpen={isOpen === index} onClickOpen={() => handleClickOpen(index)}/>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function Accordion({ faq, isOpen,onClickOpen }) {
  return (
    <div className='pt-6'>
      <dt>
        <button
          onClick={onClickOpen}
          className='flex w-full items-start justify-between text-left text-gray-900'
        >
          <span className='text-base font-semibold leading-7'>
            {faq.question}
          </span>
          <span className='ml-6 flex h-7 items-center'>
            {isOpen ? (
              <MinusCircleIcon className='h-6 w-6' aria-hidden='true' />
            ) : (
              <PlusCircleIcon className='h-6 w-6' aria-hidden='true' />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className='mt-2 pr-12'>
          <p className='text-base leading-7 text-gray-600'>{faq.answer}</p>
        </dd>
      )}
    </div>
  )
}
