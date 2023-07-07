import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Themes from './components/shared/Themes'
import Home from './components/home/Home'
import Portfolio from './components/porftfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'




function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
