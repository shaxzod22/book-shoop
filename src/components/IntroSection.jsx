import PropTypes from 'prop-types'
import { FiSearch } from "react-icons/fi";
import IntroBg from './../assets/img/introBg.png'
import IntroGirlBg from './../assets/img/introGirlBg.png'
import BookBg from './../assets/img/bookBg.png'
import './../styles/Intro.scss'
import { useContext } from 'react';
import { TypeContext } from '../App';

const IntroSection = ({heading,title,position,img,size}) => {
    console.log(position);
    const {setType}= useContext(TypeContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const query = e.target.a.value.trim().toLowerCase()
        setType(query)
        e.target.a.value = null
    }
    
    return (
        <section className={`intro bg-no-repeat bg-[length:673px_613px]`} style={{backgroundImage:`url(${IntroBg})`}}>
        <div className={`intro__container container pb-[123px] pt-[169px] bg-no-repeat  ${size?size:'bg-[length:297px_497px]'}  ${position?position:'bg-right-bottom'}`} style={{backgroundImage:`url(${img== 'book'?BookBg:IntroGirlBg})`}}>
        <h2 className="intro__heading">{heading}</h2>
        
        <p className="intro__title max-w-[555px] leading-10">{title}</p>
        <form onSubmit={handleSubmit} className="intro__form">
        <FiSearch className="intro__search__icon" />
        <input name='a' className="intro__search__input" placeholder="Search Book" type="text" />
        <button >Go</button>
        </form>
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
    }
    
    export default IntroSection
    