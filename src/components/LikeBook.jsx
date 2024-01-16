import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { GoStarFill } from "react-icons/go";
import BookImg from './../assets/img/bookImage.png.jpg'

const LikeBook = () => {
  return (
    <section className="like">
      <div className="like__container">
      <h2 className="like__heading mb-[60px] text-[40px] leading-[47px] font-medium">Which they like</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        keyboard={true}
        modules={[Pagination,Keyboard]}
        className="mySwiper "
      >
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="populer__book__link decoration-none text-5 leading-6 w-[188px] ">
    <img src={BookImg} alt="" className="drop-shadow-xl populer__book__img w-[188px] h-[288px] mb-[25px]" />
    
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
        </SwiperSlide>
    
      </Swiper>
      </div>
    </section>
  )
}

export default LikeBook
