'use client'
import { useState,useEffect } from 'react';
import App from '../App'

const Home = () => {

  const [serverGeneratedFileId, setServerGeneratedFileId] = useState(null);

  useEffect(() => {
    // Burada serverGeneratedFileId'yi alın ve state'e atayın
    const fileId = 'cf36c715-d18a-4654-afad-447397878b82'; // Örnek ID
    setServerGeneratedFileId(fileId);
  }, []);

  return (
    <div>
      {serverGeneratedFileId ? (
        <App serverGeneratedFileId={serverGeneratedFileId} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default Home
