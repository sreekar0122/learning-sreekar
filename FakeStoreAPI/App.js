import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";
import Login from './Login';
import Footer from './Footer';
import Container from './Container';
import Counter from './Counter';
import Todo from './Todo';
import Hobbies from './Assignment';
import Add from './2nd';
import Trigonometry from './3rd';
import ObjectList from './4th';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GenderAPI from './GenderAPI';
import Products from './Products';
import MyProfile from './Profile';
import Github from './github';
import Fake from './Fake';
import ProductDetailsComponent from './ProductDetailsComponent';

function App() {

    const LOGIN_URL="https://ascendion.com/login";
    let login_attempts=5;
    let menuData=[
      {title:"Home",path:"/"},
      {title:"Todos",path:"/Todo"},
      {title:"Login",path:"/login/:title/:tokenId"}
    ];
    function greet(){
      alert("Let's Login! You have a great day!");
    }
    return(
      <div className="App">

        <br/>

        
        <BrowserRouter>
          <Link to="/Home"> Home </Link>   &nbsp;  
          <Link to="/All_Categories"> All Products </Link>  &nbsp;<br/>
          <br/><br/><br/>
          <Routes>
            <Route path="/:category" element={<Fake />} />
            <Route path="/:category" element={<Products />} />
            <Route path='/:category/:id' element={<ProductDetailsComponent/>}></Route>
          </Routes>
      </BrowserRouter>

      <footer>
         <Footer/>
       </footer> 
      </div>
    );
}

export default App;
