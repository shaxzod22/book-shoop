import { useEffect } from "react";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetBook } from "./redux/BooksSlice";

const RecommendedBooks = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(GetBook('recommend'))
    },[dispatch])
    
    const data = useSelector(state=>state.book)
    const bookArr = data.recommendData?.items
    if(data?.loading){
        return <div className="loading__wrapper"><div className="loader"></div></div>
        }
    return (
        
        <section className="recommended mb-[120px]">
        <div className="recommended__container">
        <h2 className="recommended__heading text-center xl:text-start 2xl:text-center 3xl:text-start mb-[15px] sm:mb-[60px] sm:text-[40px] text-[28px] leading-[47px] font-medium">Recommended</h2>
        <div className="recommended__list justify-center flex 2xl:gap-y-12 gap-y-6 3xl:gap-y-20 3xl:gap-x-[103px] gap-x-[50px] flex-wrap">
        {
          bookArr&&  bookArr.length && bookArr.filter((checkBook=>checkBook?.volumeInfo?.pageCount)).slice(0,4).map((book,index)=>(
                <Link onClick={()=>window.scrollTo(0,0)} to={`/book/${book.id}`} key={index} className="recommended__item max-w-[600px] xl:max-w-[420px] 2xl:max-w-[600px] 3xl:items-start 2xl:items-center 3xl:w-[420px] items-center md:items-start shadow-2xl md:shadow-none p-3 md:p-0 rounded-lg md:rounded-none md:flex-row flex-col flex gap-6">
                <img src={book?.volumeInfo.imageLinks?.thumbnail
                } alt="book" className="drop-shadow-2xl w-[130px] sm:w-[147px] h-[190px] rounded-lg sm:rounded-none sm:h-[225px] recommended__book__img" />
                
                <div>
                <h3 className="text-center md:text-start capitalize text-[20px] sm:text-[25px] leading-[22px] sm:leading-[29px] mb-[12px] sm:mb-[17px]">{book.volumeInfo.title}</h3>
                <p className=" text-4 text-center md:text-start capitalize leading-[18px] mb-[14px] sm:mb-[17px] text-[#00000099]">by {book.volumeInfo?.authors?.join(', ')}</p>
                <div className="recommended__item__inner__star__box items-center justify-center md:justify-start mb-[14px] sm:mb-[16px] flex gap-[26px]">
                <ul className=" items-center flex gap-[7px] ">
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
                </ul>
                <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">{book.volumeInfo.pageCount} pages </p>
                </div>
                
                <p className="recommended__item__inner__overview text-[#0000004d] text-center md:text-start text-[15px] sm:text-4 leading-[20px] sm:leading-[25px]">{book.volumeInfo.description?.substring(0,100)}... </p>
                </div>
                </Link>
                ))
            }
            
            
            </div>
            </div>
            </section>
            )
        }
        
        export default RecommendedBooks
        