import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Post from './components/post';
import SignUp from './components/signup';
import { db, collection, getDocs, onAuthStateChanged, auth } from './firebase'
// import {db} from './firebase'

function App() {
  const[posts, setPosts] = useState([])
  const [username, setUsername] = useState();
  const[getUser, setGetUser] = useState(null)

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

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user !== null ){
        // console.log(user.displayName, user.email);
        setGetUser(user.displayName)
        console.log(getUser);
      } else {
        console.log(user);
      }
    })
  }, [getUser, username])

  
  return (
    <div className="App">
      <Header />

      <div className="app__auth">
        <SignUp username={username} setUsername={setUsername} />          
        <Login />
        Username: {getUser}
      </div>

      <div className='app__content'>
        <div>
            {posts.map(({id, post}) => 
            post && <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
