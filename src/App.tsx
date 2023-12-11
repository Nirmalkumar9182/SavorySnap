import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home } from "./app/pages/Home"
import { About } from "./app/pages/About"
import { Contact } from "./app/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

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
