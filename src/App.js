import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Logout from './components/logout';
import Post from './components/post';
import SignUp from './components/signup';
import Upload from './components/upload';
import { db, collection, getDocs, onAuthStateChanged, auth } from './firebase'
import Avatar from '@mui/material/Avatar'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function App() {
  const[posts, setPosts] = useState([])
  const [username, setUsername] = useState();
  const[getUser, setGetUser] = useState(null)

  useEffect(() => {
    
    async function getPosts(db) {
    const postCol = collection(db, 'posts');
    console.log(postCol);
    const postSnapshot = await getDocs(postCol);
    const postList = postSnapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    }));
    console.log(postSnapshot);
    setPosts(postList)
  }
  getPosts(db);
    
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user){
        console.log(user.getIdToken(true), user.email);
        setGetUser(user.displayName)
        console.log(getUser);
      } else {
        console.log(user);
      }
    })
  }, [getUser, username])

  return (
    <div className="App">
      <div className="app__headerWrapper">
      <div className="app__header">
        <Header />

        <TextField
          className='header__input'
              placeholder="Search"
              size='small'
              InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                  <SearchIcon />
                  </InputAdornment>
              ),
              }}
          />

        <div className="app__auth">
          {getUser ? 
          (<Logout getUser={getUser} setGetUser={setGetUser} />) :
          (<div className="app__auth">
            <Login />
            <SignUp username={username} setUsername={setUsername} /> 
          </div>)
        } 
              
          
          <Avatar>{getUser?.charAt(0).toUpperCase()}</Avatar>
        </div>
      </div>
      </div>

      <div className='app__content'>          
        <div className="app__right">
          
          <div className="app__inner">
              {posts.map(({id, post}) => 
              post && <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
              )}
          </div>
          <Upload getUser={getUser} />
        </div>
        <div className="app__left">
          <div className='app__leftInner'>
            <Avatar>{getUser?.charAt(0).toUpperCase()}</Avatar>
            <p>{getUser}</p>
          </div>
          {getUser ? 
          (<Logout getUser={getUser} setGetUser={setGetUser} />) :
          (null)
        } 
        </div>
      </div>
    </div>
  );
}

export default App;
