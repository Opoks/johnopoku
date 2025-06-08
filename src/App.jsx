import Header from './header/Header.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Project from './pages/project/Project'
import Contact from './pages/contact/Contact'
import './App.css'
import Footer from './footer/Footer.jsx'


function App() {
 
  return (
    <>
   
    <BrowserRouter>
    <Header/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
