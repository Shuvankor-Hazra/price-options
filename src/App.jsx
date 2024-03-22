import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <NavBar />
      <PriceOptions />
      <LineChart />
      <Phones />
      {/* <DaisyNav /> */}
    </>
  )
}

export default App
