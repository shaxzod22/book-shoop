import Logo from './../assets/img/MYBOOKLogo.svg'
import { FiShoppingCart } from "react-icons/fi";
import './../styles/Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
    <div className="container header__container">
    <div className="header__logo__box">
    <img src={Logo} alt="logo" width={125} height={36} className="header__logo__img" />
    <span className="header__logo__border"></span>
    <FiShoppingCart className='header__shopping__icon cursor' />
    </div>
    
    <div className="header__navbar">
    <div className="header__navbar__list">
    <NavLink to={'/'} className="header__navbar__item">
    Explorer
    <span className="header__navbar__item__active"></span>
    </NavLink>
    <NavLink to={'/shop'} className="header__navbar__item">
    Shop
    <span className="header__navbar__item__active"></span>
    </NavLink>
    <NavLink to={'/blog'} className="header__navbar__item">
    Blog
    <span className="header__navbar__item__active"></span>
    </NavLink>
    </div>
    <button className="header__navbar__btn cursor">
    Log in
    </button>
    </div>
    </div>
    </header>
    )
  }
  
  export default Header
  