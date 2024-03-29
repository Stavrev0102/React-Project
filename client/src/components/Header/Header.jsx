
import '../Header/Header.css'
import 'feather-icons/dist/feather';
import feather from 'feather-icons';
import{Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';
import 'feather-icons';


feather.replace();


export default function Header() {
  const {email,isAuthenticated,_id} = useContext(AuthContext);
  const [burgerOn, setBurgerOn] = useState(false);
  const onBurgerToggle = () => {
    setBurgerOn(!burgerOn);
  }

  const onBurgerClose = () => {
    setBurgerOn(false)
  }
    return (
      <div className="header">
        <div className="header__logo">
          <strong>Welcome {email}</strong>
        </div>
        <div onClick={onBurgerToggle} className="burger-menu__icon" id="burgerIcon"> 
        <i className="fa-solid fa-bars"></i>
        </div>
       {burgerOn &&
      <div  className="burger-menu">
        <ul style={{ position:"fixed" }} className="navbar__menu">
           <li className="navbar__item">
             <Link onClick={onBurgerClose} to="/" className="navbar__link">
               <i data-feather="home" />
               <span>Home</span>{" "}
             </Link>
           </li>
           <li className="navbar__item">
             <Link onClick={onBurgerClose} to="/about" className="navbar__link">
               <i data-feather="home" />
               <span>About</span>{" "}
             </Link>
           </li>
           <li className="navbar__item">
             <Link onClick={onBurgerClose} to="/catalog" className="navbar__link">
               <i data-feather="target" />
               <span>Catalog</span>
             </Link>
           </li>
           {isAuthenticated && (
             <>
               <li className="navbar__item">
                 <Link onClick={onBurgerClose} to={`/catalog/profile/${_id}`}  className="navbar__link">
                   <i data-feather="user" />
                   <span>Profile</span>
                 </Link>
               </li>
               <li className="navbar__item">
                 <Link onClick={onBurgerClose} to={'logout'} className="navbar__link">
                   <i data-feather="log-out" />
                   <span>Logout</span>
                 </Link>
               </li>
               <li className="navbar__item">
                 <Link onClick={onBurgerClose} to="/create" className="navbar__link">
                   <i data-feather="file-plus" />
                   <span>Add</span>
                 </Link>
               </li>
             </>
           )}

           {!isAuthenticated && (
             <>
                <li className="navbar__item">
             <Link onClick={onBurgerClose} to="/login" className="navbar__link">
               <i data-feather="log-in" />
               <span>Login</span>
             </Link>
           </li>
           <li className="navbar__item">
             <Link onClick={onBurgerClose} to="/register" className="navbar__link">
               <i data-feather="user-plus" />
               <span>Register</span>
             </Link>
           </li>
             </>
           )}

          
         </ul>
        
    </div> 
       }
          
     
         
       {/* razdel÷÷ */}
        
        <nav className="navbar">
          <ul className="navbar__menu">
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                <i data-feather="home" />
                <span>Home</span>{" "}
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/about" className="navbar__link">
                <i data-feather="home" />
                <span>About</span>{" "}
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/catalog" className="navbar__link">
                <i data-feather="target" />
                <span>Catalog</span>
              </Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="navbar__item">
                  <Link to={`/catalog/profile/${_id}`}  className="navbar__link">
                    <i data-feather="user" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to={'logout'} className="navbar__link">
                    <i data-feather="log-out" />
                    <span>Logout</span>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/create" className="navbar__link">
                    <i data-feather="file-plus" />
                    <span>Add</span>
                  </Link>
                </li>
              </>
            )}

            {!isAuthenticated && (
              <>
                 <li className="navbar__item">
              <Link to="/login" className="navbar__link">
                <i data-feather="log-in" />
                <span>Login</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/register" className="navbar__link">
                <i data-feather="user-plus" />
                <span>Register</span>
              </Link>
            </li>
              </>
            )}

           
          </ul>
        </nav>
      </div>
    );
}