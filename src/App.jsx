import './App.css'
import Brends from './components/Brends'
import Carusel from './components/Carusel'
import Carusel2 from './components/Carusel2'
import Kategoriy from './components/Kategoriy'
import Navbar from './components/Navbar'
import Sotuv from './components/Sotuv'

function App() {

  return (
    <>
      <div className='Navbar1'>
        <Navbar />
      </div>
      <div className="App">
        <div className='container'>
          <Carusel />
          <Kategoriy />
          <Sotuv />
          <Carusel2 />
          <Sotuv />
          <Brends />
          <Carusel2 />
          <Brends />
        </div>
      </div>


    </>

  )
}

export default App
