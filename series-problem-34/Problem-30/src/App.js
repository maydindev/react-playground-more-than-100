import { PlusIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useReducer, useState, useEffect } from "react";

export default function AddUsers() {
  //const users = [{ name: 'Test', id: crypto.randomUUID() }]

  const users = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "addUser":
        return [...state, { name: action.payload, id: crypto.randomUUID() }];
      case "deleteUser":
        const filteredUsers = state.filter(
          (user) => action.payload !== user.id
        );
        return [...filteredUsers];
    }
  };

  const [state, dispatch] = useReducer(reducer, users);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleAddUser(event) {
    event.preventDefault();
    if (userInput.trim()) {
      dispatch({ type: "addUser", payload: userInput });
      setUserInput("");
    }
  }

  function handleDeleteUser(userToDelete) {
    dispatch({ type: "deleteUser", payload: userToDelete });
  }

  return (
    <div className="mx-auto p-8 max-w-lg">
      <div>
        <Header state={state} />
        <form className="mt-6 flex" onSubmit={handleAddUser}>
          <label htmlFor="name" className="sr-only">
            Kullanıcı Adı
          </label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            name="name"
            id="name"
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Kullanıcı adını girin"
          />
          <button
            type="submit"
            className="ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Kullanıcı ekle
          </button>
        </form>
      </div>
      <div className="mt-10">
        {state.length === 0 ? (
          ""
        ) : (
          <>
            <h3 className="text-sm font-medium text-gray-500">
              Tavsiye edilen ekip üyeleri
            </h3>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {state.map((user) => (
                <User
                  key={user.id}
                  user={user}
                  onDeleteUser={handleDeleteUser}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function User({ user, onDeleteUser }) {
  return (
    <li>
      <div className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span className="flex min-w-0 flex-1 items-center space-x-3">
          <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
            <svg
              class="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <span className="block min-w-0 flex-1">
            <span className="block truncate text-sm font-medium text-gray-900">
              {user.name}
            </span>
            <span className="block truncate text-sm font-medium text-gray-500">
              Davetli Kullanıcı
            </span>
          </span>
        </span>
        <button className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
          <TrashIcon
            className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
            onClick={() => onDeleteUser(user.id)}
          />
        </button>
      </div>
    </li>
  );
}

function Header({ state }) {
  return (
    <div className="text-center">
      <PlusIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
        Ekip üyeleri ekleyin
      </h2>
      {state.length === 0 ? (
        <p className="mt-1 text-sm text-gray-500">
          Projenize henüz herhangi bir ekip üyesi eklemediniz.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
