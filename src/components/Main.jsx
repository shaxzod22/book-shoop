import PropTypes from 'prop-types'
import Navbar from './Navbar'
import BooksSection from './BooksSection'
import './../styles/Main.scss'
import BuyBook from './BuyBook'
import BlogsList from './BlogsList'

const Main = ({page}) => {
  console.log(page);
  return (
    <main className="flex gap-[59px] bg-[#F5F6F8] pt-[90px] pb-[79px] w-full">
      {page !='blog'?<Navbar/>:<BlogsList/>}
      {page=='shop'?<BuyBook/>:page=='home'?<BooksSection/>:''}
    </main>
  )
}

Main.propTypes = {
  page:PropTypes.string,
}

export default Main
