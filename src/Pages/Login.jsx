import '../css/Login.css';
import {Link} from 'react-router-dom';
function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h1 className="login-title">Login</h1>

                    <label className="input-label">Username or Email</label>
                    <input type="text" className="input-field" placeholder="Enter your username or email" />

                    <label className="input-label">Password</label>
                    <input type="password" className="input-field" placeholder="Enter your password" />

                    <div className="options-row">
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox" />
                            Remember me
                        </label>
                        <p className="forgot-password">Forgot password?</p>
                    </div>

                    <button className="login-btn">Login</button>

                    <p className="signup-text">Don't have an account? Join us now!</p>
                    <Link to="/signup" className="signup-btn">Sign Up</Link>
                </div>
            </div>
        </>
    );
}

export default Login;
