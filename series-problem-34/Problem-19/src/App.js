import { useEffect, useState, useRef } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button
        className="border-2 border-black py-1 px-2"
        onClick={openModal}
      >
        Modalı aç
      </button>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <h1 className="pb-2 text-lg font-bold">Modal açık</h1>
          <button onClick={closeModal}>Kapat</button>
        </Modal>
      )}
    </>
  );
}

function Modal({isOpen,children}) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);
  // ref.showModal()
  return <dialog ref={dialogRef} className='border-2 border-black p-4'>{children}</dialog>
}
