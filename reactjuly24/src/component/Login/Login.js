import './Login.css'
function Login(){
    return(
        <div className = "Login">
            <input type="text" name="username" />
            <input type="text" name="Password" />
            <button>Login Now</button>
        </div>
    )
}
export default Login