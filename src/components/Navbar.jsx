import { useContext } from "react"
import { TypeContext } from "../App"

const Navbar = () => {
  const {type,setType} = useContext(TypeContext)
  return (
    <section className="navbar">
      <div className="navbar__container w-[301px]">
        <div className='mb-[61px]'>
            <h2 className="navbar__genre__heading text-[25px] leading-[29px] mb-[17px] pl-[80px] font-bold">Book by Genre</h2>
            <ul className="navbar__genre__list pb-[61px] w-full flex flex-col gap-[17px]">
                <li onClick={()=>setType('all')} className={`cursor-pointer navbar__genre__item text-[25px] ${type =='all'?'active':''} leading-[29px] py-2 pl-[80px]`}>All Genres</li>
                <li onClick={()=>setType('business')} className={`${type =='business'?'active':''} cursor-pointer navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]`}>Business</li>
                <li onClick={()=>setType('science')} className={` cursor-pointer navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px] ${type =='science'?'active':''}`}>Science</li>
                <li onClick={()=>setType('fiction')} className={`cursor-pointer ${type =='fiction'?'active':''} navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]`}>Fiction</li>
                <li onClick={()=>setType('philosophy')} className={`cursor-pointer ${type =='philosophy'?'active':''} navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]`}>Philosophy</li>
                <li onClick={()=>setType('biography')} className={`cursor-pointer ${type =='biography'?'active':''} navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]`}>Biography</li>
            </ul>
        </div>

        <div className="navbar__recomendation__box">
            <h2 className="text-[25px] leading-[29px] mb-[17px] pl-[80px] font-bold">Recomendations</h2>
            <ul className={`navbar__recomendation__list pb-[61px] w-full flex flex-col gap-[17px]`}>
                <li onClick={()=>setType('artistOfMonth')} className={`${type =='artistOfMonth'?'active':''} navbar__genre__item text-[25px]  leading-[29px] py-2 cursor-pointer pl-[80px]`}>Artist of the Month</li>
                <li onClick={()=>setType('bookOfYear')} className={`navbar__genre__item text-[25px]  leading-[29px] py-2 cursor-pointer pl-[80px] ${type =='bookOfYear'?'active':''} `}>Book of the Year</li>
                <li onClick={()=>setType('topGenre')} className={`navbar__genre__item text-[25px]  leading-[29px] py-2 cursor-pointer pl-[80px] ${type =='topGenre'?'active':''} `}>Top Genre</li>
                <li onClick={()=>setType('trending')} className={`navbar__genre__item text-[25px] cursor-pointer leading-[29px] py-2 pl-[80px] ${type =='trending'?'active':''} `}>Trending</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
