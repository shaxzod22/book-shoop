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
  console.log(type);
  return (
    <main className="flex gap-[59px] bg-[#F5F6F8] pt-[90px] pb-[79px] w-full">
      {page !='blog'?<Navbar/>:<BlogsList/>}
      {type=='all'&& page=='shop'?<BuyBook/>:type=='all'&& page=='home'?<BooksSection/>:type !='all'? <TypeBookSection page={page} />:''}
    </main>
  )
}

Main.propTypes = {
  page:PropTypes.string,
}

export default Main
