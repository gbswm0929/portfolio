import './App.css'
import Header from './components/organisms/Header'
import Home from './components/Home'
import SkillStacks from './components/organisms/SkillList'
import Projects from './components/Projects'
import Footer from './components/organisms/Footer'
import { Routes, Route, Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/portfolio' element={<Home/>}/>
      <Route path='/portfolio/skill-stacks' element={<SkillStacks/>}/>
      <Route path='/portfolio/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
