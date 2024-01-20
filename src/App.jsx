import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Layout from './layouts/Layout';
import About from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { HelmetProvider } from 'react-helmet-async';
import Post from './pages/Post';

function App() {

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" index element={<Home />} />
              <Route path="/about-jinjasee" element={<About />} />
              <Route path="/our-product" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-jinjasee" element={<Contact />} />
              <Route path="/blog/post/:id" element={<Post />} />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
