import { useEffect, useState } from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

function App() {
  const { fact, refreshCat } = useCatFact() //CUSTOM HOOK
  const { image } = useCatImage({ fact }) //CUSTOM KOOH

  const handleClick = async() => {
    refreshCat()
  }
  
  return (
  <>
  <main className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[600px] h-[600px]" src={image} alt={`imagen relacionada a la primera palabra del dato: ${fact}`}/></figure>
  <div className="card-body">
    <h2 className="card-title">Imagenes de gatos!</h2>
    <p>{fact}</p>
  <button className="btn btn-outline btn-primary" onClick={handleClick}>Nuevo dato</button>
  </div>
  </main>  

  <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Realizado por Nicolás Solans</header> 
    <a className="link link-hover" href='https://www.linkedin.com/in/nicolas-solans-706518270/'>LinkedIn</a>
    <a className="link link-hover" href='https://github.com/NicolasSolans'>Github</a>
    <p>Gmail: nico.solans.drc@gmail.com</p>
    <a className="link link-hover" href="https://certificates.soyhenry.com/new-cert?id=12cc04f19c4e9e68f3ccb2778defaa1624b9cb8ae4c4043ec8bd3ed481871c8a">Graduado en "Soy Henry"</a>
  </nav> 
  </footer>
  </>
  )
}

export default App
