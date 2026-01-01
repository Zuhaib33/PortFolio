import './App.css'
import Header from './Header/Header'
import Home from './Header/Home/Home'
import About from './About/About'
import Skills from './Skills/skills'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'
// import { BrowserRouter, Routes, Route } from "react-router";

function App() {


  return (
    <div className='bg-[#171d32] h-auto w-screen overflow-hidden'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contacts/>

      {/* <Routes>
      <Route path="/about" element={<About />} />
    </Routes> */}
    </div>
  )
}

export default App
