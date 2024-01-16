import { NavLink } from 'react-router-dom'
import './../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer bg-[#FF971D]">
      <div className=" flex   container max-w-[1240px] justify-end items-center py-[30px]">
        <h4 className='font-medium text-white text-4 leading-[18px] mr-[329px]'>2020 <span className="font-normal">MY</span>BOOK</h4>

        <div className="flex items-center gap-[47px]">
    <NavLink to={'/'} className="font-medium text-white text-4 leading-[18px]">
    Explorer
    </NavLink>
    <NavLink to={'/shop'} className="font-medium text-white text-4 leading-[18px]">
    Shop
    </NavLink>
    <NavLink to={'/blog'} className="font-medium text-white text-4 leading-[18px]">
    Blog
    </NavLink>
    </div>
      </div>
    </footer>
  )
}

export default Footer
