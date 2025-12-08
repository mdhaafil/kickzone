import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Admin from './pages/admin'
import Product from './pages/Product'


function App() {
  return(
    <><div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/admin' element={<Admin />}/>
          <Route path='/product' element={<Product />}/>
        </Routes>
      </Router>

    </div><div>
      

      </div></>
  )
  
}

export default App
