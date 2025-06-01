import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header className="gnb">
      <nav className="nav-container">
        <ul className="nav-list">
          <li ><a href="#main">Home</a></li>
          <li><a href="#About">About</a></li>
          <li className="menu-li"><a href="#Projects">Project</a>
            <ul className="sub-menu">
              <li><a href="#Team1">Trip:ter</a></li>
              <li><a href="#Team2">Trip:car</a></li>
            </ul>
          </li>
          <li><a href="#Career">Career</a></li>
        </ul>
      </nav>
    </header>
    <section id="About">
      <div>
        <h1>About</h1>
      </div>
    </section>
    <section id="Projects">
      <div id="Team1">
        <h1>Tripter</h1>
      </div>
    </section>
    <section>
      <div id="Team2">
        <h2>Tripcar</h2>
      </div> 
    </section>
    <section id="Career">
      <div>
        <h1>Career</h1>
      </div>
    </section>
    <Footer />
    </StrictMode>,
)
