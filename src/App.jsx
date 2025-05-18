import Header from './components/Header'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Header />
        <MenuSection />
        <Footer />
      </div>
    </div>
  )
}

export default App