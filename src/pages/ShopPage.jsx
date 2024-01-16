import Footer from "../components/Footer"
import Header from "../components/Header"
import IntroSection from "../components/IntroSection"
import Main from "../components/Main"

const ShopPage = () => {
  return (
    <>
      <Header/>
      <IntroSection heading="appreciate your author's work" title="find your favorite book and read it here for free" />
      <Main page="shop" />
      <Footer/>
    </>
  )
}

export default ShopPage
