import { Routes, Route } from 'react-router-dom';
import Category from '../../Pages/Category';
import Home from '../../Pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:categoryId' element={<Category />} />
    </Routes>
  );
}

export default AppRoutes;
