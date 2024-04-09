import { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedData(user);
  };

  const handleDelete = (id) => {
    const newData = data.filter(user => user.id !== id);
    setData(newData);
  };

  return (
    <>
    <div className='nav'>
      <h2>Users</h2>
    </div>
    <div className="container">
        <div className='left'>

          <div className='user-list'>
            {data.map(user => (
              <div key={user.id} onClick={() => handleUserClick(user)}>
                <UserList
                  name={user.name}
                  email={user.email}
                  onDelete={() => handleDelete(user.id)} />
              </div>
            ))}
          </div>
        </div>
        <div className='right'>
          {selectedData && (
            <div className='user-info'>
              <h2>User Information</h2>
              <p>Name: {selectedData.name}</p>
              <p>Email: {selectedData.email}</p>
              <p>Username: {selectedData.username}</p>
              <p>City: {selectedData.address.city}</p>
              <p>Company: {selectedData.company.name}</p>
              <p>Website: {selectedData.website}</p>
            </div>
          )}
        </div>
      </div></>
  );
}

export default App;
