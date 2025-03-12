import React, { useState } from "react";

const INITIAL_LIST = [
  { name: "Domates", value: 55.0 },
  { name: "Marul", value: 25.5 },
  { name: "Ekmek", value: 10.99 },
];

function App() {
  return <ItemValueList />;
}

const ItemValueList = () => {
  // KODUNUZ BURAYA GELECEK
  const [items, setItems] = useState(INITIAL_LIST);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = () => {
    //İki input alanı da doldurulmak zorunda ve fiyat bir sayı olmak zorunda.
    if (name.trim() && price && !isNaN(price) && parseFloat(price) >= 0) {
      //Kullanıcı ondalıklı girmezse listeye tam sayı gelir.
      const newItem = {
        name,
        value: Number.isInteger(parseFloat(price))
          ? parseFloat(price)
          : parseFloat(price).toFixed(2),
      };
      setItems([...items, newItem]);
      setName("");
      setPrice("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div className="flex space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-1/2"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-1/2"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Gönder
        </button>
      </div>
      <ul className="list-none space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
           
            <div className="flex justify-between w-full">
            <span className="text-lg font-medium w-1/2">{item.name}</span>
              <span className="text-lg text-left w-1/4">{item.value} TL</span>
              <button onClick={() => handleDeleteItem(index)} className="ml-4 text-red-500">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
