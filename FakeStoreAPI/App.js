import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import GetAllProducts from './component/GetAllProducts/GetAllProducts.js';
function App() {
  return (
    <div className="App clearfix">
      <BrowserRouter>
      <div className="button-container">
        <Link to="/GetAllProducts" className="button products">GetAllProducts</Link>
      </div>
      <div className='button-container'>
      <Routes>
        <Route path='/GetAllProducts' element={<GetAllProducts />}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
