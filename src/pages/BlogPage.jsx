import Footer from "../components/Footer"
import Header from "../components/Header"
import IntroSection from "../components/IntroSection"
import Main from "../components/Main"

const BlogPage = () => {
  return (
    <>
      <Header/>
      <IntroSection page='blog' heading="blog mybook" position='bg-right' img="book" size="bg-[length:538px_358px]" title="lightweight article where discussing matters relating to the book" />
      <Main page="blog" />
      <Footer/>
    </>
  )
}

export default BlogPage
