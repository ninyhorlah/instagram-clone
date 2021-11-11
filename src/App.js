import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Post from './components/post';
import { db, collection, getDocs } from './testFirebase'
// import {db} from './firebase'

function App() {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    
    async function getCities(db) {
    const postCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postCol);
    const postList = postSnapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    }));
    setPosts(postList)
  }
  getCities(db);
    
  }, [])

  
  return (
    <div className="App">
      <Header />

      {posts.map(({id, post}) => 
        post && <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        )}
    </div>
  );
}

export default App;
