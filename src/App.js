
import './App.css';
import Main from './Components/Main';
import Homes from './Components/Homes';
import About from './Components/About';
import {BrowserRouter, Route,Link,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar bg-secondary text-light'>
        <div className='container'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>    
      </nav>
       
        <Routes>
          <Route path="/" element={<Homes/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
