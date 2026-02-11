import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Changelog } from './components/Changelog'
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
