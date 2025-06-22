import '../css/Signup.css';
import {Link} from 'react-router-dom';
function Signup() {
    return (
        <>
            <div className="signup-container">
                <div className="signup-box">
                    <h1 className="signup-title">Sign Up</h1>

                    <label className="input-label">Email</label>
                    <input type="text" className="input-field" placeholder="Enter your email" />

                    <label className="input-label">Username</label>
                    <input type="text" className="input-field" placeholder="Enter your username" />

                    <label className="input-label">Password</label>
                    <input type="password" className="input-field" placeholder="Enter your password" />

                    <button className="signup-btn">Sign Up</button>

                    <p className="login-text">Already have an account? Login instead</p>
                    <Link to="/" className="login-btn">Login</Link>
                </div>
            </div>
        </>
    );
}

export default Signup;
