import { LuArrowLeft } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import DinamicPageBg from './../assets/img/dinamicBg.png'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDinamicBook, GetSearchBook } from "../components/redux/BooksSlice";
import { Link, useParams } from "react-router-dom";

const DinamicBookPage = () => {
  const {id} = useParams('id')
  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(GetDinamicBook(id))
  },[dispatch,id])

const data = useSelector(state=>state.book)
const bookArr = data.dinamicBook

useEffect(()=>{
  dispatch(GetSearchBook(bookArr?.volumeInfo?.categories?.length>1? bookArr?.volumeInfo?.categories[0]:bookArr?.volumeInfo?.categories))
  },[dispatch,bookArr?.volumeInfo?.categories])
  const relatedData = useSelector(state=>state.book)

  let relatedBookArr = relatedData?.searchData?.items
  console.log(relatedData);

  if(relatedData?.dinamicLoading){
  return <div className="loading__wrapper"><div className="loader"></div></div>
  }

  return (
   
      <section className="bg-[#F5F6F8] mx-auto bg-no-repeat bg-top bg-[length:100%] pt-4 md:pt-[20px] lg:pt-[40px]  2xl:pt-[50px] 3xl:pt-[30px] px-4 max-w-full  pb-[86px]" style={{backgroundImage:`url(${DinamicPageBg})`,}}>
    
    <section className="flex 2xl:flex-row 2xl:items-start flex-col items-center max-w-[325px] md:max-w-full mx-auto  justify-center gap-[30px] 3xl:gap-[41px]">
    
    <div>
    <button onClick={()=>history.back()}><LuArrowLeft  className="text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]  lg:w-[60px] lg:h-[60px] cursor-pointer 3xl:mb-5 md:mb-5 mb-4 lg:mb-6 2xl:mb-10 " /></button>

    <section className="max-w-[325px] md:max-w-[450px] lg:max-w-[660px] 3xl:max-w-[729px] bg-white">
    
    <div className="flex flex-col mb-7 md:flex-row w-full md:gap-4 lg:gap-7 3xl:gap-9 md:mb-[40px] lg:mb-[57px]">
    
    <img src={bookArr?.volumeInfo?.imageLinks.thumbnail} alt="book" className="mt-3 md:mt-0 mx-auto md:mx-0 mb-5 md:mb-0  w-[170px] lg:w-[260px] 2xl:w-[220px] 3xl:w-[287px] 2xl:h-[350px] drop-shadow-2xl h-[250px] lg:h-[400px] 3xl:h-[435px]" />
    
    <div className="flex pl-[25px] md:pl-0  flex-col md:justify-end w-full md:w-[373px] pr-[15px]">

    <h2 className=" mb-[12px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] items-center font-medium text-[25px] lg:text-[35px] 2xl:text-[40px] 3xl:text-[40px] sm:leading-8 md:leading-[36px] lg:leading-[45px] 2xl:leading-[60px] capitalize">{bookArr?.volumeInfo?.title}</h2>
    
    <div className="dinamic__date__info flex items-center gap-[15px] text-[#00000099] text-4 leading-[19px] mb-[15px]">
    <p className="capitalize">by {bookArr?.volumeInfo?.authors?.join(', ')}</p>
    <p className="">{bookArr?.volumeInfo?.publishedDate} </p>
    </div>
    
    <ul className=" items-center flex mb-3 md:mb-[18px] lg:mb-[25px] gap-[6px] ">
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#DEDEDE]" /></li>
    </ul>
    
    <div className="dinamic__date__info md:text-[14px] lg:text-4 leading-[19px] flex text-[#00000099] items-center mb-3 md:mb-5 gap-[25px] lg:mb-11">
    <p>3.7M read</p>
    <p>9.8K Votes</p>
    </div>
    
    <div className="flex gap-7 md:gap-0 md:justify-between items-center font-medium lg:text-[18px] md:text-[15px] md:leading-[15px] lg:leading-[21px]">

    <button className="w-[100px] 2xl:w-[150px] lg:w-[120px] 3xl:w-[176px] lg:h-[45px] h-[36px] md:h-[40px] bg-[#FF971D] rounded-[10px] text-white active:opacity-60 border-[#ffffff] hover:opacity-80 border-[1px] border-solid capitalize">Buy now</button>

    <button className="capitalize hover:opacity-80 active:opacity-60 h-[36px] w-[100px] lg:w-[120px] 2xl:w-[150px] 3xl:w-[176px] rounded-[10px] text-[#ff961d99] md:h-[40px] lg:h-[45px] border-[#FF971D] border-[1px] border-solid">read book</button>
    </div>
    </div>
    </div>
    
    <div className="px-4 md:px-[38px] pb-[33px] flex items-start flex-col">
    <h2 className="text-[25px] leading-[23px] tracking-[0.003px] md:mb-[15px] sm:mb-3 lg:mb-[25px]">Description</h2>

    <p className="text-[14px] md:text-4 text-[#00000099] leading-[20px] md:leading-[26px] tracking-[0.004px] mb-5 md:mb-[30px] lg:mb-[54px]">{bookArr?.volumeInfo?.description?.replaceAll('<p>','').replaceAll('</p>','').replaceAll('<b>','').replaceAll('</b>','').replaceAll('<br>','').replaceAll('</br>','').replaceAll('<i>','').replaceAll('</i>','') } </p>
    
    <div className="flex flex-wrap items-center gap-4 md:gap-[25px] mb-8 md:mb-[54px]">
    <button className="w-[100px] md:w-[108px] h-[30px] md:h-[39px] bg-[#DEDEDE] rounded-[10px] text-[#0000004d] hover:bg-[#b9b8b8] active:opacity-70">Biografi</button>
    <button className="w-[100px] md:w-[108px] h-[30px] md:h-[39px] bg-[#DEDEDE] rounded-[10px] text-[#0000004d] hover:bg-[#b9b8b8] active:opacity-70">AutoBiografi</button>
    <button className="w-[100px] md:w-[108px] h-[30px] md:h-[39px] bg-[#DEDEDE] rounded-[10px] text-[#0000004d] hover:bg-[#b9b8b8] active:opacity-70">Memoar</button>
    </div>
    
    <div className="mb-[40px] md:mb-[74px]">
    <h2 className="text-[25px] text-center md:text-start leading-[23px] tracking-[0.003px] text-[#000000] mb-[20px] capitalize">Informasi Tambahan</h2>
    
    <ul className="flex justify-center flex-wrap gap-10 ">
    <li>
    <ul className="flex flex-col gap-5">
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">Publisher</h4>
    <p className="text-[#0000004d]">{bookArr?.volumeInfo?.publisher}</p>
    </li>
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">genre</h4>
    <p className="text-[#0000004d]">{bookArr?.volumeInfo?.categories?.length>1? bookArr?.volumeInfo?.categories[0]:bookArr?.volumeInfo?.categories}</p>
    </li>
    
    </ul>
    </li>
    <li>
    <ul className="flex flex-col gap-5">
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">Date </h4>
    <p className="text-[#0000004d]">{bookArr?.volumeInfo?.publishedDate}</p>
    </li>
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">pages</h4>
    <p className="text-[#0000004d]">{bookArr?.volumeInfo?.pageCount} Pages</p>
    </li>
    
    </ul>
    </li>
    <li>
    <ul className="flex flex-col gap-5">
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">language</h4>
    <p className="text-[#0000004d]">{bookArr?.volumeInfo?.language}</p>
    </li>
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">form</h4>
    <p className="text-[#0000004d]">{bookArr?.volumeInfo?.printType}</p>
    </li>
    
    </ul>
    </li>
    
    
    </ul>
    </div>
    
    <button className="w-[200px] h-[32px] md:w-[350px] lg:w-[479px] md:h-[40px] lg:h-[50px] rounded-[10px] border-solid border-[1px] border-[#FF971D] hover:text-white hover:bg-[#FF971D] active:opacity-70 capitalize text-[#FF971D] md:text-[18px] lg:text-[20px] leading-[23px] self-center">See comment</button>
    </div>
    
    </section>
    </div>
    
    <section className="w-full md:w-[500px] 2xl:pt-[90px] 3xl:pt-[100px]">

    <h2 className="text-[25px] text-center lg:text-start md:text-[30px] lg:text-[36px] leading-[46px] font-medium lg:text-black  2xl:text-white md:mb-5 lg:mb-8 capitalize">related books</h2>
    
    <div className="flex flex-col w-full gap-6">
  {relatedBookArr && relatedBookArr.slice(0,4).map((book,index)=>(
      <Link onClick={()=>window.scrollTo(0,0)} to={`/book/${book.id}`} key={index} className="bg-white flex-col md:flex-row pt-[13px] pl-[17px] pr-[15px] pb-[17px] w-full flex lg:items-start items-center gap-[23px]">
      <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="book" className="drop-shadow-xl w-[147px] h-[225px]" />
      
      <div >
      <h3 className=" capitalize text-[20px] lg:text-[25px] md:leading-[25px] lg:leading-[35px] mb-[10px] lg:mb-[15px]">{book?.volumeInfo?.title} </h3>
      <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
      <div className=" items-center mb-[17px] flex gap-[24px]">
      <ul className=" items-center flex gap-[7px] ">
      <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
      <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
      <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
      <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
      <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
      </ul>
      <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">{book.volumeInfo.pageCount} pages</p>
      </div>
      
      <p className="rambla text-[#0000004d] text-4 leading-[25px]">{book.volumeInfo.description?.substring(0,100)}...</p>
      </div>
      </Link>
    ))}
   
    
    </div>
    </section>
    
    </section>

    </section>
    )
  }
  
  export default DinamicBookPage
  