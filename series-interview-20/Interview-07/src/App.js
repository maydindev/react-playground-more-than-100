import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  // KODUNUZ BURAYA GELECEK
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    /*
    fetch("https://randomuser.me/api?results=5")
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      setUsers(data.results)
      setFilteredUsers(data.results)
    }) 
    */
    axios
      .get("https://randomuser.me/api?results=10")
      .then((response) => {
        setUsers(response.data.results);
        setFilteredUsers(response.data.results);
      })
      .catch((error) => {
        console.error("Kullanıcıları çekerken hata oluştu.", error);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) => {
      return `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
    setFilteredUsers(filtered);
  });

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search users"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <ul className="w-full mt-4">
          {filteredUsers.map((user) => {
            return (
              <li key={user.login.uuid} className="py-2 border-b border-gray-200">
                {user.name.title} {user.name.first} {user.name.last}
              </li>
            );
          })}
        </ul>
        </div>
    </div>
  );
}

export default App;
