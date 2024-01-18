import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Layout from './layouts/Layout';
import About from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" index element={<Home />} />
            <Route path="/about-jinjasee" index element={<About />} />
            <Route path="/our-product" index element={<Products />} />
            <Route path="/our-blog" index element={<Blog />} />
            <Route path="/contact-jinjasee" index element={<Contact />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
