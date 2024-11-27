import { BrowserRouter , Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Landing from "./pages/ui_ux/landing";
import Graphics from "./pages/graphics/graphics";
import About from "./pages/about";
import Experience from "./pages/experience";

function App() {
  return (
    <BrowserRouter>
        <AnimatePresence > 
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<Landing />} />
              <Route path='/graphics' element={<Graphics />} />
              <Route path='/about' element={<About />}></Route>
            </Route>
            <Route path='/experience' element={<Experience />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
  )
}

export default App
