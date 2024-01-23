import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  GetSearchBook } from "./redux/BooksSlice";
import { GoStarFill } from "react-icons/go";


const BuyBook = () => {
  const dispatch = useDispatch()
    
  useEffect(()=>{
      dispatch(GetSearchBook('all'))
  },[dispatch])
  
  const data = useSelector(state=>state.book)
  const bookArr = data.recommendData.items
  console.log(bookArr);
  return (
    <section>
    <div className="flex flex-wrap ml-[78px] gap-y-[69px] gap-x-[147px]">
      {bookArr && bookArr.slice(0,8).map((book,index)=>(
           <Link to={`/book/${book.id}`} key={index} className="w-[384px] relative bg-white pt-[29px] pr-[33px] pl-[104px] pb-[27px]">
           <img src={book?.volumeInfo.imageLinks?.thumbnail
                } alt="book" className="absolute drop-shadow-2xl w-[147px] left-0 top-0 h-[225px] translate-x-[-50%] translate-y-[32px]" />
           
           <div>
           <h3 className=" capitalize text-[25px] leading-[29px] mb-[17px]">{book.volumeInfo.title}</h3>
           <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by {book.volumeInfo?.authors?.join(', ')}</p>
           <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
           <ul className=" items-center flex gap-[7px] ">
           <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
           <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
           </ul>
           <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">{book.volumeInfo.pageCount} pages</p>
           </div>
           
           <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">{book.volumeInfo.description?.substring(0,100)}...</p>
       
           <button className="w-full bg-[#ff961d1a] border-[#FF971D] border-solid border-[1px] rounded-[10px] h-[43px] mt-[18px] text-[#FF971D] font-medium text-4 leading-[18px] hover:border-[2px] active:opacity-60">Buy now</button>
           </div>
           </Link>
        ))}
    </div>
    </section>
    )
  }
  
  export default BuyBook
  