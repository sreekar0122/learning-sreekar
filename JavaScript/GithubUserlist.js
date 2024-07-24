import { useState } from "react";
import axios from "axios";
import './GithubUserlist.css'
function GithubUserlist(){
    let [username,setusername] = useState(" ")
    function Addusername(e){
        setusername(e.target.value)
    }
    let url = `https://api.github.com/users/${username}`
    function generate(){
    axios
    .get(url)
    .then(function(response){
        setusername(response.data)

    })
    .catch(function(error){
        console.log(error)
    })
}
    return(
        <div>
        <input type="text" value={username} onChange={Addusername}/>
        <button onClick={generate}>generate</button>
        <div>
            <img src={username.avatar_url} width={"100px"} height={"100px"} alt="Avatar"/>
            <p>User Id : {username.id}</p>
        </div>
        </div>
    )
}
export default GithubUserlist