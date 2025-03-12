import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

// Bir "BoxButton" bileşeni oluşturun ve farklı içerik iletmek için children prop'unu kullanın
function BoxButton({ children }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
      // Dosya ile ilgili işlemler de burada yapılabilir.
    }
  };
  return (
    //<button>{children}</button>
    <>
      <button
        onClick={handleButtonClick}
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {children}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="space-y-4 p-8 max-w-sm mx-auto">
      <BoxButton>
        <CameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Yeni bir resim ekleyin
        </span>
      </BoxButton>
      <BoxButton>
        <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Yeni bir video oluşturun
        </span>
      </BoxButton>
    </div>
  );
}