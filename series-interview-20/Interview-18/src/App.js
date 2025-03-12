import React, { useEffect, useState } from "react";
import axios from "axios";

const useBitcoin = () => {
  // KODUNUZ BURAYA GELECEK
  const [price,setPrice] = useState(undefined)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const getPrice = async () => {
      try {
        const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        setPrice(response.data.bpi.USD.rate_float)
        setLoading(false)
      } catch(error) {
        console.error("Hata",error)
        setLoading(false)
      }
    }
    getPrice()
    const imtervalId = setInterval(getPrice,60000)
    return () => clearInterval(imtervalId)
  },[])

  return {price,loading}

};

function App() {
  // KODUNUZ BURAYA GELECEK
  const {price,loading} = useBitcoin()

  return (
    <div className="text-3xl">
      {loading ? (<div>Loading...</div>) : price !== undefined ? (<p>{price}</p>) : (<p>Fiyat Yok.</p>)}
    </div>
  )
}

export default App;
