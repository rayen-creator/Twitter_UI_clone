import Home from './components/home'
import Rightbar from './components/rightbar'
import Siderbar from './components/siderbar'

function App() {

  return (
    <div className="h-screen flex flex-row divide-x">
      <Siderbar />
      <div className='flex-1'>
       <Home/>
      </div>
      <Rightbar />
    </div>
  )
}

export default App
