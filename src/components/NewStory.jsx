import { GoStarFill } from "react-icons/go";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetNewBook } from "./redux/BooksSlice";


const NewStory = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(GetNewBook())
    },[dispatch])
    const data = useSelector(state=>state.book)
    const bookArr = data.storyData.items
    console.log(bookArr);
  return (
    <section className="newstory mb-[120px]">
        <div className="newstory__container">
        <h2 className="newstory__heading text-center font-medium text-[40px] tracking-[0.02px] mb-[60px] leading-[47px]">This new story</h2>
        <div className="flex gap-y-20 gap-x-[103px] flex-wrap">
        {
          bookArr&&  bookArr.length && bookArr.slice(0,4).map((book,index)=>(
                <Link to={`/book/${book.id}`} key={index} className="recommended__item w-[420px] flex gap-6">
                <img src={book?.volumeInfo.imageLinks?.thumbnail
                } alt="book" className="drop-shadow-2xl w-[147px] h-[225px] recommended__book__img" />
                
                <div>
                <h3 className=" capitalize text-[25px] leading-[29px] mb-[17px]">{book.volumeInfo.title}</h3>
                <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by {book.volumeInfo?.authors}</p>
                <div className="recommended__item__inner__star__box items-center mb-[16px] flex gap-[26px]">
                <ul className=" items-center flex gap-[7px] ">
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
                <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
                </ul>
                <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">{book.volumeInfo.pageCount} pages </p>
                </div>
                
                <p className="recommended__item__inner__overview text-[#0000004d] text-4 leading-[25px]">{book.volumeInfo.description?.substring(0,100)}... </p>
                </div>
                </Link>
                ))
            }
           
        </div>
        </div>
      
    </section>
  )
}

export default NewStory
