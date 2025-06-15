import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About'
import GlowMovingDots from './components/GlowMovingDots'
import Home from './pages/Home'
import Layout from './pages/Layout'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GlowMovingDots/>
      </div>
      <main className="relative z-10">
        <BrowserRouter>
          <Routes>
              <Route path='/portfolio_alanawu' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='/portfolio_alanawu/about' element={<About />}/>
                <Route path='/portfolio_alanawu/contact' element={<ContactPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App