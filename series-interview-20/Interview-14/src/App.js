import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Pagination />
    </div>
  );
}

const Pagination = () => {
  // KODUNUZ BURAYA EKLENECEK
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://randomuser.me/api?results=20");
        const users = res.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          email: user.email,
        }));
        setUsers(users);
        setLoading(false);
        console.log(users);
      } catch (error) {
        console.error("Error fetching.", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Pages content={users} itemsPerPage={itemsPerPage} />
        </>
      )}
    </div>
  );
};

const Pages = ({ content, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  const totalPages = Math.ceil(content.length / itemsPerPage)
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClickPaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div >
      <div>
      <table>
        <thead>
          <tr>
            <th className="px-20 py-2">name</th>
            <th className="px-7 py-2">age</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <div className="flex justify-center mt-6">
        <ul className="inline-flex space-x-2">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <a href="#!" 
              onClick={() => handleClickPaginate(pageNumber)}
              className={`px-2 py-2 text-purple-500 ${currentPage === pageNumber ? "font-bold" : ""}`}>
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
