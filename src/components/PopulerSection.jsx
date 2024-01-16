
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Keyboard } from 'swiper/modules';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import { GoStarFill } from "react-icons/go";
import { GetPopulerBook } from './redux/BooksSlice';

const PopulerSection = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(GetPopulerBook())
    },[dispatch])
    const data = useSelector(state=>state.book)
    const bookArr = data.populerData.items
    console.log(bookArr);
  return (
    <section className="populer">
    <div className="populer__container">
    <h2 className="populer__heading mb-[60px] text-[40px] leading-[47px] font-medium">Populer</h2>
   
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        keyboard={true}
        modules={[Pagination,Keyboard]}
        className="mySwiper "
      >
      {
        bookArr&&  bookArr.length && bookArr.slice(0,9).map((book,index)=>(
            <SwiperSlide key={index}>
            <Link to={`/book/${book.id}`}>
            <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
           <img src={book?.volumeInfo.imageLinks?.thumbnail
                } alt="book" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
           
           <h3 className="populer__book__name capitalize mb-3">Tentang kamu</h3>
           
           <p className="populer__book__author text-4 leading-[18px] mb-3 capitalize text-[#00000099]">tere liye  </p>
           
           <ul className="populer__book__star__list items-center flex gap-[7px] ">
           <li className="populer__book__star__item"><GoStarFill className="populer__book__star__item__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="populer__book__star__item"><GoStarFill className="populer__book__star__item__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="populer__book__star__item"><GoStarFill className="populer__book__star__item__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="populer__book__star__item"><GoStarFill className="populer__book__star__item__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           
           <li className="populer__book__star__item"><GoStarFill className="populer__book__star__item__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
           
           </ul>
           </div>
            </Link>
               </SwiperSlide>
            ))
      }
        
      </Swiper>
    
    </div>
    </section>
    )
  }
  
  export default PopulerSection
  