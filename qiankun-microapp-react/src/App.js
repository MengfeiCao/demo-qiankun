import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { pRouterContext } from './context';

// import Test from './components/Test';
// import Test1 from './components/test1';

function App() {
  const { pRouter } = useContext(pRouterContext);
  // const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/test" >To Test（Something wrong）</Link>
        <span onClick={() => {
          pRouter.push('/micro-app-react/else');
          // window.history.pushState({}, '', '/micro-app-react/else');
        }}>导航去Else页面</span>
      </header>

      
      {/* <Test />
      <Test1 num={1} /> */}
    </div>
  );
}

export default App;
