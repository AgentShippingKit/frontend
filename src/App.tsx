import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ValueProps } from './components/ValueProps'
import { QuickStart } from './components/QuickStart'
import { Compatibility } from './components/Compatibility'
import { Ecosystem } from './components/Ecosystem'
import { Community } from './components/Community'
import { Resources } from './components/Resources'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <QuickStart />
        <Compatibility />
        <Ecosystem />
        <Community />
        <Resources />
      </main>
      <Footer />
    </>
  )
}

export default App
