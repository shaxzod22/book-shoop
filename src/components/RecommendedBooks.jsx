import { GoStarFill } from "react-icons/go";
import BookImg from './../assets/img/bookImage.png.jpg'

const RecommendedBooks = () => {
  return (
    <section className="recommended mb-[120px]">
      <div className="recommended__container">
        <h2 className="recommended__heading mb-[60px] text-[40px] leading-[47px] font-medium">Recommended</h2>
        <ul className="recommended__list flex gap-y-20 gap-x-[103px] flex-wrap">
            <li className="recommended__item w-[420px] flex gap-6">
                <img src={BookImg} alt="" className="drop-shadow-2xl w-[147px] h-[225px] recommended__book__img" />

                <div>
                    <h3 className=" capitalize text-[25px] leading-[29px] mb-[17px]">rich people problems</h3>
                    <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
                    <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
                        <ul className=" items-center flex gap-[7px] ">
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
                        </ul>
                        <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
                    </div>

                    <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                </div>
            </li>
            <li className="recommended__item w-[420px] flex gap-6">
                <img src={BookImg} alt="" className="drop-shadow-2xl w-[147px] h-[225px] recommended__book__img" />

                <div className="recommended__item__inner__box ">
                    <h3 className="recommended__item__inner__heading capitalize text-[25px] leading-[29px] mb-[17px]">rich people problems</h3>
                    <p className="recommended__item__inner__author text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
                    <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
                        <ul className="recommended__item__inner__star__list items-center flex gap-[7px] ">
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
                        </ul>
                        <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
                    </div>

                    <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                </div>
            </li>
            <li className="recommended__item w-[420px] flex gap-6">
                <img src={BookImg} alt="" className="drop-shadow-2xl w-[147px] h-[225px] recommended__book__img" />

                <div className="recommended__item__inner__box ">
                    <h3 className="recommended__item__inner__heading capitalize text-[25px] leading-[29px] mb-[17px]">rich people problems</h3>
                    <p className="recommended__item__inner__author text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
                    <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
                        <ul className="recommended__item__inner__star__list items-center flex gap-[7px] ">
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
                        </ul>
                        <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
                    </div>

                    <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                </div>
            </li>
            <li className="recommended__item w-[420px] flex gap-6">
                <img src={BookImg} alt="" className="drop-shadow-2xl w-[147px] h-[225px] recommended__book__img" />

                <div className="recommended__item__inner__box ">
                    <h3 className="recommended__item__inner__heading capitalize text-[25px] leading-[29px] mb-[17px]">rich people problems</h3>
                    <p className="recommended__item__inner__author text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
                    <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
                        <ul className="recommended__item__inner__star__list items-center flex gap-[7px] ">
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
                        </ul>
                        <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
                    </div>

                    <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                </div>
            </li>

        </ul>
      </div>
    </section>
  )
}

export default RecommendedBooks
