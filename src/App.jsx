import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home"
import Aboutme from "./components/Pages/Aboutme"
import Contact from "./components/Pages/Contact"
import PageNotFound from "./components/Pages/PageNotFound"
import Navbar from "./components/Pages/Navbar"
import ProjectsBig from "./components/Pages/Projects"
import ProjectDetail from "./components/Pages/ProjectDetail"
import Footer from "./components/Pages/Footer"


function App() {

  const Layout = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<ProjectsBig />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
