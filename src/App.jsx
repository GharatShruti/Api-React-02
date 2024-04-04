import { useState,useEffect } from 'react'
import './App.css'
import UserCard from './components/card'

function App() {

  const [data,setData] = useState([])
  const [selecteddata,setSelectedData]=useState({})

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>setData( data))
  .catch(error => console.log(error))
  },[]);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };



  return (
    <>
      <div className='nav'>
        <h2>Users</h2>
      </div>
      <div className='App'>
        {data.map((user, index) => (
          <div key={index} onClick={() => setSelectedData(user)}>
            <h1 style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: '30px',
            }}>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      {selecteddata && (
        <UserCard
          user={selecteddata}
          onDelete={() => {
            const index = data.findIndex(user => user.id === selecteddata.id);
            handleDelete(index);
            setSelectedData(null);
          }}
          {...<div>
            <h1>Selected Data</h1>
            <p>Name: {selecteddata.name}</p>
            <p>Email: {selecteddata.email}</p>
          </div>}
        />
      )}
    </>
  )
}

export default App
