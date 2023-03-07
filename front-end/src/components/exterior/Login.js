import "./style/login.css"

const Login = () => {
  return(
    <div className="login-container">
      <div className="login-inner">
        <div className="login-title">
          Log in
        </div>
        <div className="login-input-outer">
          <form>
            <div className="login-label">
            User number
            </div>
            <div>
              <input id="userNumber" type="text" className="login-input"></input>
            </div>
            <div className="login-label">
            Password
            </div>
            <div>
              <input id="userPassword" type="text" className="login-input"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;