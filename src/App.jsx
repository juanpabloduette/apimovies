import './App.css'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Menu from './components/Navbar/Menu'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Series from './components/Series/Series'
import Search from './components/Search/Search'

function App() {

  return (
        <>
          <Menu />
          <Routes>
            <Route path='/' element={<Content />}/>
            <Route path='/tv' element={<Series />}/>
            <Route path='/search' element={<Search />}/>
          </Routes>
          <Footer />
        </>
  )
}

export default App
