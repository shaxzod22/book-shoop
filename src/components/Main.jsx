import PropTypes from 'prop-types'
import Navbar from './Navbar'
import BooksSection from './BooksSection'
import TypeBookSection from './TypeBookSection'
import './../styles/Main.scss'
import BuyBook from './BuyBook'
import BlogsList from './BlogsList'
import { useContext } from 'react'
import { TypeContext } from '../App'

const Main = ({page}) => {
  const {type} = useContext(TypeContext)
  return (
    <main className="flex relative bg-[#F5F6F8] pt-14 2xl:pt-[90px] pb-[50px] sm:pb-[79px] w-screen">
      {page !='blog'?<Navbar/>:<BlogsList/>}
      {type=='all'&& page=='shop'?<BuyBook/>:type=='all'&& page=='home'?<BooksSection/>:type !='all' && page != 'blog'? <TypeBookSection page={page} />:''}
    </main>
  )
}

Main.propTypes = {
  page:PropTypes.string,
}

export default Main
