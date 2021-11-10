import './App.css';
import Header from './components/header';
import Post from './components/post';

function App() {
  return (
    <div className="App">
      <Header />

      <Post username={"username"} caption={"A mother's love"} imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' />

      <Post username={"username"} caption={"A mother's love"} imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' />

      <Post username={"username"} caption={"A mother's love"} imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png' />
    </div>
  );
}

export default App;
