import './Login.css'
function Login(){
    let msg = "Login Component"
    function DoLogin(){
        alert("wow, Now I am login also");
    }
    return(
        <div className = "Login">
            <h1>{msg}</h1>
            <input type="text" name="username" />
            <input type="text" name="Password" />
            <button onClick={DoLogin}>Login Now</button>
        </div>
    )
}
export default Login;