import './App.css';
import Menu from './component/Menu/Menu.js';
import Login from './component/Login/Login.js';
import Footer from './component/Footer/Footer.js';
import Container from './component/Container/Container.js';
import Counter from './component/Counter/Counter.js';
import Todo from './component/Todo/Todo.js'
import Calculate from './component/Calculate/Calculate.js';
import Funcalculator from './component/Funcalculator/FunCalculator.js'
import Student from './component/Student/Student.js'
function App() {
  return (
    <div className="App">
      <header>
        <Todo/>
        <Calculate/>
        <Funcalculator/>
        <Student/>
      </header>
    </div>
  );
}

export default App;
