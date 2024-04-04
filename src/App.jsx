import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/card';

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
    <div className="container">
      <div className='left'>
        <div className='nav'>
          <h2>Users</h2>
        </div>
        <div className='user-list'>
          {data.map(user => (
            <div key={user.id} onClick={() => handleUserClick(user)}>
              <UserCard
                user={user}
                onDelete={() => handleDelete(user.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='right'>
        {selectedData && (
          <div className='user-info'>
            <h2>Selected User Information</h2>
            <p>Name: {selectedData.name}</p>
            <p>Email: {selectedData.email}</p>
            {/* Add more details if needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
