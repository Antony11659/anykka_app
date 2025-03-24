import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [post, setPost] = useState(null); // Initialize as null since we're fetching a single post
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="App">Loading...</div>;
  if (error) return <div className="App">Error: {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{post?.body}</h1>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Enter something:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInput"
            value={post?.body || ''}
            onChange={(e) => setPost({...post, body: e.target.value})}
            placeholder="Type here..."
          />
        </div>
        <p>You typed:</p>
      </header>
    </div>
  );
}

export default App;