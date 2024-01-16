import { Route, Routes } from "react-router-dom"
import BlogPage from "../pages/BlogPage"
import DinamicBookPage from "../pages/DinamicBookPage"
import HomePage from "../pages/HomePage"
import ShopPage from "../pages/ShopPage"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/dinamic" element={<DinamicBookPage/>} />
    </Routes>
  )
}

export default MainRoutes
