import "./login.css"
export default function Login() {
  return (
    <div>
        <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialFriend</h3>
                    <span className="loginDec">Connect with friends, share something and watching videos.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Register</button>
                    </div>
                </div>
            </div>
        </div>
        </>
      
    </div>
  )
}
