import RecommendedBooks from './RecommendedBooks'
import PopulerSection from './PopulerSection'
import NewStory from './NewStory'
import LikeBook from './LikeBook'

const BooksSection = () => {
  return (
    <section className="books">
    <section className="books__top__part rounded-l-[10px] w-full pb-[42px] pt-[42px] pl-[75px] mb-[71px]">
    <RecommendedBooks/>
    <PopulerSection/>
    </section>
    <section className="books__lower__part rounded-l-[10px]  pb-[42px] pt-[42px] pl-[75px]">
    <NewStory/>
    <LikeBook/>
    </section>
    </section>
    )
  }
  
  export default BooksSection
  