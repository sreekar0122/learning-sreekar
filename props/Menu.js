import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import './Menu.css'
function Menu(props){
    return(
        <div className='menucontainer'>
        <nav className = "Menu"> 
            {props.MenuData.map(function(val){
                return(<div className='list'><Link to={val.path}>{val.title}</Link></div>)
            })}
        </nav>
        </div>
    )
}
export default Menu
