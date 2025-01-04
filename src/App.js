import Navbar from './Navbar.js';
import Home from './Home';

const myvar=10;
const myLink="https://www.instagram.com";


function App() {
  return (
  
    <div className="App">
      <Navbar/>
      <div className="content">
        Hello World

      {myvar}

      <h1 href={myLink}>My Link</h1>
      <a href={myLink}>My Link of instagram</a>
      
      <Home/>
      </div>
    </div>
  );
}

export default App;

