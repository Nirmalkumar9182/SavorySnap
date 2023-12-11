import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home } from "./app/pages/Home"
import { About } from "./app/pages/About"
import { Contact } from "./app/pages/Contact"
import { NavBar } from "./app/componenets/NavBar"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
