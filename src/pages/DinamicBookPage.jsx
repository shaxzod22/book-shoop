import { LuArrowLeft } from "react-icons/lu";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import BookImg from './../assets/img/bookImage.png.jpg'
import DinamicPageBg from './../assets/img/dinamicBg.png'

const DinamicBookPage = () => {
  return (
    <section className="bg-[#F5F6F8] mx-auto bg-no-repeat bg-top bg-[length:100%] xl:pt-[50px] 2xl:pt-[70px] px-4 pb-[86px]" style={{backgroundImage:`url(${DinamicPageBg})`,}}>
    
    <section className="flex  justify-center xl:gap-[30px] 2xl:gap-[41px] items-start">
    
    <div>
    <LuArrowLeft className="text-white w-[60px] h-[60px] cursor-pointer 2xl:mb-14 xl:mb-10 " />
    <section className="xl:max-w-[660px] 2xl:max-w-[729px] bg-white">
    
    <div className="flex w-full xl:gap-7 2xl:gap-9 mb-[57px]">
    
    <img src={BookImg} alt="book" className="xl:w-[260px] 2xl:w-[287px] drop-shadow-2xl xl:h-[400px] 2xl:h-[435px]" />
    
    <div className="flex flex-col justify-end w-[373px] pr-[15px]">
    <h2 className="flex gap-[25px] xl:mb-[20px] 2xl:mb-[25px] items-center font-medium xl:text-[48px] 2xl:text-[50px] leading-[67px] capitalize">garis waktu <FaRegSquarePlus className="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4" /></h2>
    <div className="dinamic__date__info flex items-center gap-[25px] text-[#00000099] text-4 leading-[19px] mb-[15px]">
    <p className="capitalize">by Fiersa besari</p>
    <p className="">1 juli 2016</p>
    </div>
    
    <ul className=" items-center flex mb-[25px] gap-[6px] ">
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#000000]" /></li>
    <li className=""><GoStarFill className=" w-[11px] h-[11px] text-[#DEDEDE]" /></li>
    </ul>
    
    <div className="dinamic__date__info text-4 leading-[19px] flex text-[#00000099] items-center gap-[25px] mb-11">
    <p>3.7M read</p>
    <p>9.8K Votes</p>
    </div>
    
    <div className="flex justify-between items-center font-medium text-[18px] leading-[21px]">
    <button className="xl:w-[150px] 2xl:w-[176px] h-[45px] bg-[#FF971D] rounded-[10px] text-white active:opacity-60 border-[#ffffff] hover:opacity-80 border-[1px] border-solid capitalize">Buy now</button>
    <button className="capitalize hover:opacity-80 active:opacity-60 xl:w-[150px] 2xl:w-[176px] rounded-[10px] text-[#ff961d99] h-[45px] border-[#FF971D] border-[1px] border-solid">read book</button>
    </div>
    </div>
    </div>
    
    <div className="px-[38px] pb-[33px] flex items-start flex-col">
    <h2 className="text-[25px] leading-[23px] tracking-[0.003px] mb-[25px]">Sinopsis</h2>
    <p className="text-4 text-[#00000099] leading-[26px] tracking-[0.004px] mb-[54px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue. Risus id purus dolor dolor. Sagittis at vulputate rhoncus pharetra purus vitae, ac. Sit nam eleifend mauris, duis mattis leo, ut. Viverra accumsan elementum vehicula orci magna. Elementum, euismod ut sed at ut non. Eget commodo mi scelerisque erat. Mus adipiscing et mattis vitae sapien turpis. Eu, sit urna, convallis in commodo, sed condimentum dictumst vitae. Ultricies aenean a non tincidunt tortor ut pulvinar. Vulputate viverra tempor sed turpis at blandit malesuada at quam. Enim cursus vitae turpis lectus egestas nunc risus.</p>
    
    <div className="flex items-center gap-[25px] mb-[54px]">
    <button className="w-[108px] h-[39px] bg-[#DEDEDE] rounded-[10px] text-[#0000004d] hover:bg-[#b9b8b8] active:opacity-70">Biografi</button>
    <button className="w-[108px] h-[39px] bg-[#DEDEDE] rounded-[10px] text-[#0000004d] hover:bg-[#b9b8b8] active:opacity-70">AutoBiografi</button>
    <button className="w-[108px] h-[39px] bg-[#DEDEDE] rounded-[10px] text-[#0000004d] hover:bg-[#b9b8b8] active:opacity-70">Memoar</button>
    </div>
    
    <div className="mb-[74px]">
    <h2 className="text-[25px] leading-[23px] tracking-[0.003px] text-[#000000] mb-[20px] capitalize">Informasi Tambahan</h2>
    
    <ul className="flex flex-wrap gap-10 ">
    <li>
    <ul className="flex flex-col gap-5">
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">diterbitkan tanggal</h4>
    <p className="text-[#0000004d]">Fiksi / romance / Umum</p>
    </li>
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">diterbitkan tanggal</h4>
    <p className="text-[#0000004d]">Fiksi / romance / Umum</p>
    </li>
    
    </ul>
    </li>
    <li>
    <ul className="flex flex-col gap-5">
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">diterbitkan tanggal</h4>
    <p className="text-[#0000004d]">Fiksi / romance / Umum</p>
    </li>
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">diterbitkan tanggal</h4>
    <p className="text-[#0000004d]">Fiksi / romance / Umum</p>
    </li>
    
    </ul>
    </li>
    <li>
    <ul className="flex flex-col gap-5">
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">diterbitkan tanggal</h4>
    <p className="text-[#0000004d]">Fiksi / romance / Umum</p>
    </li>
    <li className="text-4 leading-[19px] rambla capitalize">
    <h4 className=" text-[#00000099] mb-[10px]">diterbitkan tanggal</h4>
    <p className="text-[#0000004d]">Fiksi / romance / Umum</p>
    </li>
    
    </ul>
    </li>
    
    
    </ul>
    </div>
    
    <button className="w-[479px] h-[50px] rounded-[10px] border-solid border-[1px] border-[#FF971D] hover:text-white hover:bg-[#FF971D] active:opacity-70 capitalize text-[#FF971D] text-[20px] leading-[23px] self-center">See comment</button>
    </div>
    
    </section>
    </div>
    
    <section className="xl:w-[450px] 2xl:w-[500px] xl:pt-[110px] 2xl:pt-[120px]">
    <h2 className="text-[36px] leading-[46px] font-medium text-white mb-8 capitalize">Cerita serupa</h2>
    
    <ul className="flex flex-col w-full gap-6">
    <li className="bg-white pt-[13px] pl-[17px] pr-[15px] pb-[17px] w-full flex gap-[23px]">
    <img src={BookImg} alt="" className="drop-shadow-xl w-[147px] h-[225px]" />
    
    <div >
    <h3 className=" capitalize text-[25px] leading-[35px] mb-[15px]">rich people problems</h3>
    <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
    <div className=" items-center mb-[17px] flex gap-[24px]">
    <ul className=" items-center flex gap-[7px] ">
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
    </ul>
    <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
    </div>
    
    <p className="rambla text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
    </div>
    </li>
    <li className="bg-white pt-[13px] pl-[17px] pr-[15px] pb-[17px] w-full flex gap-[23px]">
    <img src={BookImg} alt="" className="drop-shadow-xl w-[147px] h-[225px]" />
    
    <div >
    <h3 className=" capitalize text-[25px] leading-[35px] mb-[15px]">rich people problems</h3>
    <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
    <div className=" items-center mb-[17px] flex gap-[24px]">
    <ul className=" items-center flex gap-[7px] ">
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
    </ul>
    <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
    </div>
    
    <p className="rambla text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
    </div>
    </li>
    <li className="bg-white pt-[13px] pl-[17px] pr-[15px] pb-[17px] w-full flex gap-[23px]">
    <img src={BookImg} alt="" className="drop-shadow-xl w-[147px] h-[225px]" />
    
    <div >
    <h3 className=" capitalize text-[25px] leading-[35px] mb-[15px]">rich people problems</h3>
    <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
    <div className=" items-center mb-[17px] flex gap-[24px]">
    <ul className=" items-center flex gap-[7px] ">
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
    </ul>
    <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
    </div>
    
    <p className="rambla text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
    </div>
    </li>
    <li className="bg-white pt-[13px] pl-[17px] pr-[15px] pb-[17px] w-full flex gap-[23px]">
    <img src={BookImg} alt="" className="drop-shadow-xl w-[147px] h-[225px]" />
    
    <div >
    <h3 className=" capitalize text-[25px] leading-[35px] mb-[15px]">rich people problems</h3>
    <p className=" text-4 capitalize leading-[18px] mb-[17px] text-[#00000099]">by kevin kwan</p>
    <div className=" items-center mb-[17px] flex gap-[24px]">
    <ul className=" items-center flex gap-[7px] ">
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#FF971D]" /></li>
    <li className="recommended__item__inner__star__item"><GoStarFill className="recommended__item__inner__star__icon w-[11px] h-[11px] text-[#DEDEDE]" /></li>
    </ul>
    <p className="recommended__item__inner__votes font-light  text-4 leading-4 text-[#0000004d]">1,988,288 votes</p>
    </div>
    
    <p className="rambla text-[#0000004d] text-4 leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
    </div>
    </li>
    
    </ul>
    </section>
    
    </section>
    </section>
    )
  }
  
  export default DinamicBookPage
  