import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home'
import Exhibition from './Pages/Exhibition/Exhibition'
import Feed from './Pages/Feed/Feed'
import Gallary from './Pages/Gallary/Gallary'
import Store from './Pages/Store/Store'
import Studios from './Pages/Studios/Studios'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/exhibition' exact element={<Exhibition />} />
        <Route path='/gallary' exact element={<Gallary />} />
        <Route path='/store' exact element={<Store />} />
        <Route path='/studios' exact element={<Studios />} />
        <Route path='/feed' exact element={<Feed />} />
      </Routes>
    </div>
  )
}

export default App
