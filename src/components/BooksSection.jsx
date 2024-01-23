import RecommendedBooks from './RecommendedBooks'
import PopulerSection from './PopulerSection'
import NewStory from './NewStory'
import LikeBook from './LikeBook'

const BooksSection = () => {
  return (
    <section className="books 2xl:pl-[330px] 3xl:pl-[360px] w-full ">
    <section className="books__top__part rounded-l-[10px] w-full md:pb-[42px] pt-[25px] pr-[16px]  md:pr-3 2xl:pt-[42px] pl-[16px] md:pl-[30px] 3xl:pl-[75px] pb-4 mb-[71px]">
    <RecommendedBooks/>
    <PopulerSection/>
    </section>
    <section className="books__lower__part pl-[16px] md:pl-[30px] rounded-l-[10px] pr-[16px] pb-4 md:pb-[42px] md:pr-3  pt-[42px] 3xl:pl-[75px]">
    <NewStory/>
    <LikeBook/>
    </section>
    </section>
    )
  }
  
  export default BooksSection
  