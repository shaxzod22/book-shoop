
import Footer from "../components/Footer"
import Header from "../components/Header"
import IntroSection from "../components/IntroSection"
import Main from "../components/Main"

const HomePage = () => {
 
  return (
    <>
     <Header/> 
     <IntroSection heading="read and add your insight" title="find your favorite book and read it here for free" />
     <Main page="home" />
     <Footer/>
    </>
  )
}

export default HomePage
