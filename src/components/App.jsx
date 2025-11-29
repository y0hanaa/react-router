
import './App.css';
import AppRoutes from '../Routes.jsx';

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
        <a href="/">Logo</a>
        <nav>
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      {component}
    </>
  );
}

export default App;
