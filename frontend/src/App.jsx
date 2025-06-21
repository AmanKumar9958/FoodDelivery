import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Layout from './components/Layout'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/menu' element={<Layout><Menu /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App