import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Flipkart/Navbar';
import { Container } from '@mui/material';

import ShowProducts from './Flipkart/Home/ShowProducts';
import ShowCategories from './Flipkart/Home/ShowCategories';
import ShowUsers from './Flipkart/Home/ShowUsers';

const AddProducts = lazy(() => import('./Flipkart/Admin/Addproducts'));
const AddCategory = lazy(() => import('./Flipkart/Admin/AddCategories'));
const AddUsers = lazy(() => import('./Flipkart/Admin/AddUsers'));
const AddRole = lazy(() => import('./Flipkart/Admin/AddRoles'));


function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Suspense fallback={<div>Loading admin components...</div>}>
          <Routes>
            <Route path="/admin" element={<div>Admin Dashboard</div>} />
            <Route path="/admin/addproducts" element={<AddProducts />} />
            <Route path="/admin/addcategory" element={<AddCategory />} />
            <Route path="/admin/addusers" element={<AddUsers />} />
            <Route path="/admin/addrole" element={<AddRole />} />
          </Routes>
        </Suspense>

        <Routes>
          <Route path="/home" element={<div>Home Dashboard</div>} />
          <Route path="/home/showproducts" element={<ShowProducts />} />
          <Route path="/home/showcategories" element={<ShowCategories />} />
          <Route path="/home/showusers" element={<ShowUsers />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;