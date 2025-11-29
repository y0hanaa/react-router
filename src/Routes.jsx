
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';

const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    );
}

export default AppRoute;
