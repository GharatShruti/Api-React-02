import './card.css';


const UserList = ({onDelete, name, email }) => {

  return (
    <div className="user-card">
      <div className="info">
        <p className="username">{name}</p>
        <p className="email">{email}</p>
      </div>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default UserList;
