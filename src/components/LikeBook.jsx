import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Keyboard } from 'swiper/modules';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import { GoStarFill } from "react-icons/go";
import { GetLikeBook } from './redux/BooksSlice';

const LikeBook = () => {
  const dispatch = useDispatch()
    
  useEffect(()=>{
      dispatch(GetLikeBook())
  },[dispatch])
  const data = useSelector(state=>state.book)
  const bookArr = data?.likeData?.items
  console.log(bookArr);
  return (
    <section className="like">
      <div className="like__container">
      <h2 className="like__heading mb-[15px] sm:mb-[60px] sm:text-[40px] text-[28px] text-center sm:text-start leading-[47px] font-medium">Which they like</h2>

      
    <Swiper
        slidesPerView={1.5}
        slidesPerGroup= {1.5}
        loop={true}
        keyboard={true}
        breakpoints={{
          1330: {
             slidesPerView: 4,
             slidesPerGroup: 4,
           },
           1100:{
             slidesPerView: 3,
             slidesPerGroup: 3,
           },
           900:{
             slidesPerView: 4,
             slidesPerGroup: 4,
           },
           600:{
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          478:{
            slidesPerView: 2.5,
            slidesPerGroup: 2.5,
          },
         }}
        modules={[Pagination,Keyboard]}
        className="mySwiper box-border w-full"
      >
      {
        bookArr&&  bookArr.length && bookArr.slice(0,9).map((book,index)=>(
            <SwiperSlide key={index}>
            <Link to={`/book/${book.id}`}>
            <div className="populer__book__link decoration-none text-5 leading-6 w-[160px]
xl:w-[188px] ">
           <img src={book?.volumeInfo.imageLinks?.thumbnail
                } alt="book" className="drop-shadow-xl populer__book__img w-[160px] h-[225px] md:h-[250px] rounded-lg md:rounded-none xl:w-[188px] xl:h-[288px] mb-[18px] xl:mb-[25px]" />
           
           <h3 className="populer__book__name text-center md:text-start capitalize text-[17px] sm:text-[18px] mb-2 sm:mb-3">{book?.volumeInfo?.title?.substring(0,15)}...</h3>
           
           <p className="populer__book__author text-center md:text-start text-4 leading-[18px] mb-3 capitalize text-[#00000099]">{book.volumeInfo?.authors?.join(', ').substring(0,15)}</p>
           
           <ul className="populer__book__star__list justify-center md:justify-start items-center flex gap-[7px] ">
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

export default LikeBook
