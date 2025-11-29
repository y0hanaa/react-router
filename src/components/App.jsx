
import './App.css';
import AppRoutes from '../Routes.jsx';
import { Link } from 'react-router-dom';

const App = () => {


  // switch (window.location.pathname) {
  //case '/':
  //    component = <Home />;
  //    break;
  //  case '/':
  //    component = <Products />;
  //    break;

  //  case '/':
  //    component = <About />;
  //    break;
  //}

  return (
    <>
      <header>
        <Link to='/'>Logo</Link>
        <nav>
          <ul>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <AppRoutes />
    </>
  );
}

export default App;
