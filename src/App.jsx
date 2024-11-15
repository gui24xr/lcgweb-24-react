import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Awardspage,
  BioPage,
  ConcertsPage,
  GalleryPage,
  HomePage,
  MusicPage,
  RegisterPage,
  ShopPage
} from './pages/pages.index.js'



import './App.css'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/bio' element={<BioPage/>}/>
        <Route path='/concerts' element={<ConcertsPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/music' element={<MusicPage/>}/>
        <Route path='/awards' element={<Awardspage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
