import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Layout from './layouts/Layout';
import About from './pages/About';

function App() {

  return (
    <>
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" index element={<Home />} />
            <Route path="/about-jinjasee" index element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
