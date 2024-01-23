import { useContext } from "react";
import { GoStarFill } from "react-icons/go";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TypeContext } from "../App";
import { GetSearchBook } from "./redux/BooksSlice";
import { useEffect } from "react";


const BuyBook = ({page}) => {
    const {type} = useContext(TypeContext)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(GetSearchBook(type))
    },[dispatch,type])
    
    const data = useSelector(state=>state.book)
    const bookArr = data?.searchData?.items
    console.log(bookArr);
    return (
        <section>
        <div className="flex flex-wrap ml-[78px] gap-y-[69px] gap-x-[147px]">
        {
          bookArr&&  bookArr.length &&  bookArr.map((book,index)=>(
            <Link key={index} to={`/book/${book.id}`} className="w-[384px] relative bg-white pt-[29px] pr-[33px] pl-[104px] pb-[27px]">
            <img src={book?.volumeInfo?.imageLinks?.thumbnail
} alt="" className="absolute drop-shadow-2xl w-[147px] left-0 top-0 h-[225px] translate-x-[-50%] translate-y-[32px]" />
            
            <div>
            <h3 className=" capitalize text-[25px] leading-[29px] mb-[17px]">{book?.volumeInfo?.title} </h3>
            <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by {book.volumeInfo?.authors?.join(', ')}</p>
            <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
            <ul className=" items-center flex gap-[7px] ">
            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
            <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
            </ul>
            <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">{book?.volumeInfo?.pageCount} pages</p>
            </div>
            
            <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">{book.volumeInfo.description?.substring(0,100)}... </p>
            
            <Link to={`/book/${book.id}`} className={` ${page!= 'shop'?'none':''} flex items-center justify-center w-full decoration-0 bg-[#ff961d1a] border-[#FF971D] border-solid border-[1px] rounded-[10px] h-[43px] mt-[18px] text-[#FF971D] font-medium text-4 leading-[18px] hover:border-[2px] active:opacity-60`}>Buy now</Link>
            </div>
            </Link>
            )) 
        
            }
        
        
        
        </div>
        </section>
        )
    }
    
    BuyBook.propTypes ={
        page:PropTypes.string,
    }
    export default BuyBook
    