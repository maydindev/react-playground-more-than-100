import React, { useEffect, useState } from "react";

//how to blur image react with input range yazınca pişti olduk :)
//https://reactinterviews.dev/posts/blur-image

//kütüphane yapmış
//https://github.com/MarkoCen/react-blur-image-loader

//https://picsum.photos/ ana sayfada blur kullanım detayları bulunmaktadır.

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  // KODUNUZ BURAYA GELECEK
  const [image, setImage] = useState(BASE_IMG_URL);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    setImage(blur != 0 ? BASE_IMG_URL + "?blur=" + blur : BASE_IMG_URL)
  },[blur])


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <img src={image} alt="Try blur" width="400" height="400" style={{margin:"20px"}}/>
      <p style={{margin: "20px"}}>Blur için kaydırın</p>
      <input type="range" step="1" min="0" max="10" value={blur} onChange={(e) => setBlur(e.target.value)} style={{background: "transparent", color: "blue"}}/>
    </div>
  )
};

export default App;
