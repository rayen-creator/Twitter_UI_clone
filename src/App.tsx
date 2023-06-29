import Header from './components/header'
import Home from './components/home'
import Posts from './components/post'
import Rightbar from './components/rightbar'
import Siderbar from './components/siderbar'
import TweetWidget from './components/widgets/tweet_widget'

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
