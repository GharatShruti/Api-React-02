import './card.css';


const UserCard = ({ user, onDelete }) => {
  const { name, email } = user;

  return (
    <div className="user-card">
      <div className="user-info">
        <p className="username">{name}</p>
        <p className="email">{email}</p>
      </div>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
