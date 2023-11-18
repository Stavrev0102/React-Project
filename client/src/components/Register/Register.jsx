
import styles from '../Register/Register.module.css';

export default function Register () {
    return (
        <div className="form signup_form">
            <form action="#">
              <h2>Signup</h2>
              <div className="input_box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required=""
                />
                <i className="uil uil-envelope-alt email" />
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="Create password"
                  required=""
                />
                <i className="uil uil-lock password" />
                <i className="uil uil-eye-slash pw_hide" />
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required=""
                />
                <i className="uil uil-lock password" />
                <i className="uil uil-eye-slash pw_hide" />
              </div>
              <button className="button">Signup Now</button>
              <div className="login_signup">
                Already have an account?{" "}
                <a href="#" id="login">
                  Login
                </a>
              </div>
            </form>
          </div>
    )
}