import "./app.css"

// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    //CSS
    /*
    <span className='wrapper'>
      <button className='button-create' style={{backgroundColor:"green", color:"white", margin: "10px", padding:"10px", borderRadius:"10px"}}>Create</button>
      <button className='button-update' style={{backgroundColor:"orange", color:"white", margin: "10px", padding:"10px", borderRadius:"10px"}}>Update</button>
      <button className='button-delete'style={{backgroundColor:"red", color:"white", margin: "10px", padding:"10px", borderRadius:"10px"}}>Delete</button>
    </span>
    */
    //TailwindCSS
    <span className='wrapper'>
      <button className="bg-green-500 text-white m-2 p-2 rounded-lg">Create</button>
      <button className="bg-orange-500 text-white m-2 p-2 rounded-lg">Update</button>
      <button className="bg-red-500 text-white m-2 p-2 rounded-lg">Delete</button>
    </span>
  )
}
