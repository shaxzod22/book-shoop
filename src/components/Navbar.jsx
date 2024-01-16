
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar__container w-[301px]">
        <div className='mb-[61px]'>
            <h2 className="navbar__genre__heading text-[25px] leading-[29px] mb-[17px] pl-[80px] font-bold">Book by Genre</h2>
            <ul className="navbar__genre__list pb-[61px] w-full flex flex-col gap-[17px]">
                <li className="navbar__genre__item text-[25px] active leading-[29px] py-2 pl-[80px]">All Genres</li>
                <li className="navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]">Business</li>
                <li className="navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]">Science</li>
                <li className="navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]">Fiction</li>
                <li className="navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]">Philosophy</li>
                <li className="navbar__genre__item text-[25px] leading-[29px] py-2 pl-[80px]">Biography</li>
            </ul>
        </div>

        <div className="navbar__recomendation__box">
            <h2 className="text-[25px] leading-[29px] mb-[17px] pl-[80px] font-bold">Recomendations</h2>
            <ul className="navbar__recomendation__list pb-[61px] w-full flex flex-col gap-[17px]">
                <li className="navbar__recomendation__item text-[25px] active leading-[29px] py-2 pl-[80px]">Artist of the Month</li>
                <li className="navbar__recomendation__item text-[25px] active leading-[29px] py-2 pl-[80px]">Book of the Year</li>
                <li className="navbar__recomendation__item text-[25px] active leading-[29px] py-2 pl-[80px]">Top Genre</li>
                <li className="navbar__recomendation__item text-[25px] active leading-[29px] py-2 pl-[80px]">Trending</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
