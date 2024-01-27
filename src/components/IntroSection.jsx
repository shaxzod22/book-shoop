import PropTypes from 'prop-types'
import { FiSearch } from "react-icons/fi";
import IntroBg from './../assets/img/introBg.png'
import IntroGirlBg from './../assets/img/introGirlBg.png'
import BookBg from './../assets/img/bookBg.png'
import './../styles/Intro.scss'
import { useContext } from 'react';
import { TypeContext } from '../App';

const IntroSection = ({heading,title,position,img,size,page}) => {
   
    const {setType}= useContext(TypeContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const query = e.target.a.value.trim().toLowerCase()
        setType(query)
        e.target.a.value = null
    }
    
    return (
        <section className={`intro bg-no-repeat bg-[length:453px_453px] xl:bg-[length:673px_613px]`} style={{backgroundImage:`url(${IntroBg})`}}>
        <div className={`intro__container px-4 max-w-[780px] xl:max-w-[1000px] 3xl:max-w-[1330px] mx-auto pb-[80px] lg:pb-[100px] xl:pb-[123px] pt-[70px] sm:pt-[100px] md:pt-[110px] lg:pt-[120px] xl:pt-[169px] bg-no-repeat flex flex-col items-center md:items-start ${size?size:'bg-[length:0px_0px] md:bg-[length:217px_387px] xl:bg-[length:257px_457px] 3xl:bg-[length:297px_497px]'}  ${position?position:'bg-right-bottom'}`} style={{backgroundImage:`url(${img== 'book'?BookBg:IntroGirlBg})`}}>
        <h2 className="intro__heading  md:max-w-[400px] leading-[30px] md:text-start text-center text-[#dedede] sm:text-black md:leading-[45px] lg:leading-[55px] xl:leading-[70px] xl:text-[45px] text-[20px] sm:text-[25px] max-w-[300px] md:text-[30px] lg:text-[36px] lg:max-w-[500px] xl:max-w-[600px] 2xl:text-[50px] 3xl:leading-[95px] 3xl:text-[75px] 2xl:max-w-[700px] 3xl:mb-[15px] font-bold uppercase mb-2 md:mb-0">{heading}</h2>
        
        <p className="intro__title text-[#dedede] sm:text-black md:text-[22px] text-[18px] xl:text-[25px] leading-[20px] md:text-start text-center sm:leading-[30px] max-w-[300px] md:max-w-[400px] lg:max-w-[555px] ">{title}</p>
        {page != 'blog'?<form  onSubmit={handleSubmit} className="intro__form w-full max-w-[280px] md:max-w-[320px] xl:max-w-[406px]">
        <FiSearch className="md:w-6 h-5 w-5 md:h-6 " />
        <input name='a' className="intro__search__input w-full px-[3px] py-[14px] md:py-[18px] " placeholder="Search Book" type="text" />
        <button >Go</button>
        </form>:''}
        </div>
        </section>
        )
    }
    
    IntroSection.propTypes ={
        heading:PropTypes.string,
        title:PropTypes.string,
        position:PropTypes.string,
        img:PropTypes.string,
        size:PropTypes.string,
        page:PropTypes.string,
    }
    
    export default IntroSection
    