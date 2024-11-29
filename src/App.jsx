import React, { Suspense } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navBar";

import Loader from "./components/loader";

const Home = React.lazy(() => import("./pages/home"));

const Landing = React.lazy(() => import("./pages/ui_ux/landing"));

const Graphics = React.lazy(() => import("./pages/graphics/graphics"));

const About = React.lazy(() => import("./pages/about"));

const Experience = React.lazy(() => import("./pages/experience"));

const Contact = React.lazy(() => import("./pages/contact"));


function App() {
  return (
    <BrowserRouter>
        <AnimatePresence > 
          <NavBar />
          <Routes>
            <Route path='/' element={<Suspense fallback={<Loader />}><Home /></Suspense>}>
              <Route index element={<Suspense fallback={<Loader />}><Landing /></Suspense>} />
              <Route path='/graphics' element={<Suspense fallback={<Loader />}><Graphics /></Suspense>} />
              <Route path='/about' element={<Suspense fallback={<Loader />}><About /></Suspense>}></Route>
            </Route>
            <Route path='/experience' element={<Suspense fallback={<Loader />}><Experience /></Suspense>}></Route>
            <Route path='/contact' element={<Suspense fallback={<Loader />}><Contact /></Suspense>}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
  )
}

export default App
