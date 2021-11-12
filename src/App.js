import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Post from './components/post';
import SignUp from './components/signup';
import { db, collection, getDocs } from './firebase'
// import {db} from './firebase'

function App() {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    
    async function getPosts(db) {
    const postCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postCol);
    const postList = postSnapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    }));
    setPosts(postList)
  }
  getPosts(db);
    
  }, [])

  
  return (
    <div className="App">
      <Header />

      <div className='app__content'>
        <div>
            {posts.map(({id, post}) => 
            post && <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            )}
        </div>
        <div>
          <SignUp/>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
