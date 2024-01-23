import { useState } from "react";
import { useContext } from "react"
import { RiMenu3Fill } from "react-icons/ri";
import { TypeContext } from "../App"

const Navbar = () => {
  const [hasType, setHasType] = useState(false)
  const {type,setType} = useContext(TypeContext)
  return (
   <div>
   <RiMenu3Fill onClick={()=>setHasType(!hasType)} className="block 2xl:hidden w-[30px] left-3 top-3 cursor-pointer absolute h-[30px]" />
   <section className={`navbar bg-[#EEEFF1] 2xl:bg-transparent ${!hasType?'hidden':''} z-10 2xl:block left-0 absolute`}>
      <div className="navbar__container pt-5 2xl:pt-0 w-[250px] md:w-[301px]">
        <div className='mb-[61px]'>
            <h2 className="navbar__genre__heading text-[25px] leading-[29px] mb-[17px] pl-[25px] md:pl-[60px] 3xl:pl-[80px] font-bold">Book by Genre</h2>
            <ul className="navbar__genre__list pb-[61px] w-full flex flex-col gap-[17px]">
                <li  onClick={()=>{setType('all')
              setHasType(!hasType)
              }} className={`cursor-pointer navbar__genre__item text-[25px] ${type =='all'?'active':''} leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px]`}>All Genres</li>
                <li  onClick={()=>{
                  setType('business')
                  setHasType(!hasType)
                  }} className={`${type =='business'?'active':''} cursor-pointer navbar__genre__item text-[25px] leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px]`}>Business</li>
                <li  onClick={()=>{
                setType('science')
                setHasType(!hasType)
                }} className={` cursor-pointer navbar__genre__item text-[25px] leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px] ${type =='science'?'active':''}`}>Science</li>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('fiction')}} className={`cursor-pointer ${type =='fiction'?'active':''} navbar__genre__item text-[25px] leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px]`}>Fiction</li>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('philosophy')}} className={`cursor-pointer ${type =='philosophy'?'active':''} navbar__genre__item text-[25px] leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px]`}>Philosophy</li>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('biography')}} className={`cursor-pointer ${type =='biography'?'active':''} navbar__genre__item text-[25px] leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px]`}>Biography</li>
            </ul>
        </div>

        <div className="navbar__recomendation__box">
            <h2 className="text-[25px] leading-[29px] mb-[17px] pl-[25px] md:pl-[60px] 3xl:pl-[80px] font-bold">Recomendations</h2>
            <ul className={`navbar__recomendation__list pb-[61px] w-full flex flex-col gap-[17px]`}>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('artistOfMonth')}} className={`${type =='artistOfMonth'?'active':''} navbar__genre__item text-[25px]  leading-[29px] py-2 cursor-pointer pl-[25px] md:pl-[60px] 3xl:pl-[80px]`}>Artist of the Month</li>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('bookOfYear')}} className={`navbar__genre__item text-[25px]  leading-[29px] py-2 cursor-pointer pl-[25px] md:pl-[60px] 3xl:pl-[80px] ${type =='bookOfYear'?'active':''} `}>Book of the Year</li>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('topGenre')}} className={`navbar__genre__item text-[25px]  leading-[29px] py-2 cursor-pointer pl-[25px] md:pl-[60px] 3xl:pl-[80px] ${type =='topGenre'?'active':''} `}>Top Genre</li>
                <li  onClick={()=>{
                  setHasType(!hasType)
                  setType('trending')}} className={`navbar__genre__item text-[25px] cursor-pointer leading-[29px] py-2 pl-[25px] md:pl-[60px] 3xl:pl-[80px] ${type =='trending'?'active':''} `}>Trending</li>
            </ul>
        </div>
      </div>
    </section>
   </div>
  )
}

export default Navbar
