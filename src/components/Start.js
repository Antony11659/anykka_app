import { useNavigate } from 'react-router-dom';

function Posts() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear auth tokens here
    navigate('/');
  };

  return (
    <div className="posts-page">
      <h1>Welcome to Posts Page</h1>
      <p>Here would be your posts...</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Posts;