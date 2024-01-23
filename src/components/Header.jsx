import Logo from './../assets/img/MYBOOKLogo.svg'
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import './../styles/Header.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [hasNavbar,sethasNavbar] = useState(false)
  return (
    <header className="header ">
    <div className="container header__container py-[25px] sm:py-[33px] justify-between max-w-[780px] xl:max-w-[1000px] 3xl:max-w-[1330px]">
    <div className="header__logo__box sm:gap-[20px] gap-[15px] ">
    <img src={Logo} alt="logo" className="header__logo__img w-[86px] sm:w-[96px] h-[25px] sm:h-[30px] md:h-[36px] md:w-[125px]" />
    <span className="header__logo__border h-[25px] sm:h-[34px] w-[0.8px]"></span>
    <FiShoppingCart className='w-[20px] h-[20px] md:text-black text-white md:w-[24px]  md:h-[24px] cursor' />
    </div>

    <HiMenuAlt3 onClick={()=>sethasNavbar(!hasNavbar)} className={`sm:w-9 w-7 h-7 sm:h-9 lg:hidden text-white`} />
    
    <div className={`lg:flex ${!hasNavbar? 'hidden':'flex'}  border-[2px] border-white border-solid lg:border-none lg:flex-row pt-4 lg:pt-0 pb-16 top-0 lg:pb-0 flex-col right-0 md:w-1/2 w-2/3 lg:w-auto bg-[#FF971D] lg:bg-transparent lg:static absolute items-center gap-[20px] xl:gap-[45px]`}>
      <div onClick={()=>sethasNavbar(!hasNavbar)} className='self-end lg:hidden mr-5 text-[23px] font-bold text-white mb-[-25px]'>X</div>
    <div className="flex lg:flex-row flex-col items-center gap-[5px] lg:gap-[25px] xl:gap-[45px]">
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
    <button className="header__navbar__btn cursor h-[45px] w-[120px] xl:text-[25px] text-[20px] xl:h-[58px] xl:w-[189px]">
    Log in
    </button>
    </div>
    </div>
    </header>
    )
  }
  
  export default Header
  