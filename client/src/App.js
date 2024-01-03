import { useState } from "react"

export default function App() {

  const [usersList, setUsersList] = useState([])
  const [usersCount, setUsersCount] = useState(0)

  const usersHandler = async () => {
    await fetch('api/users')
    .then(res => res.json())
    .then(data => {
      if (data.count) {
        setUsersList(data.data)
        setUsersCount(data.count)
      }
    })
    .catch(e => {
      setUsersList([e.message])
    })
  }

  return (

    <div className='App'>
      <header>
        <h2>Get users</h2>
        <p>v1.0</p>
      </header>
      <section>
        <button id='btn-primary' onClick={usersHandler}>
          Получить список
        </button>
        <h2>Количество: {usersCount}</h2>
        <ul>
          {
            usersList.length
            ? usersList.map((user, idx) => <li key={idx}>{user}</li>)
            : 'Список пользователей пуст!'
          }
        </ul>
      </section>
    </div>

  )

}
