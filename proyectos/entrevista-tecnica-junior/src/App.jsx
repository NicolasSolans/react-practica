import { useEffect, useState } from 'react'
import './App.css'

const API_RANDOM_FACTS = 'https://catfact.ninja/fact'
const API_RANDOM_IMAGE = 'https://cataas.com/cat/says/'
import axios from 'axios'

function App() {
  const [fact, setFact] = useState();
  const [image, setImage] = useState();

  //Traemos información random de los gatos
  useEffect(() => {
    fetch(API_RANDOM_FACTS)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
    })
  }, [])

  //Traemos una imagen en base a la primera palabra de la informacion.
  useEffect(()=>{
    if(!fact) return 

    const firstWorld = fact.split(' ').slice(0, 1).join(' ')
    console.log(firstWorld);

    axios.get(`${API_RANDOM_IMAGE}${firstWorld}`)
    .then((response) => {
      const {config} = response
      const url = config.url
      setImage(url)
    })
    
  }, [fact]);
  
  return (
  <>
  <main className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px] h-[200px]" src={image} alt={`imagen relacionada a la primera palabra del dato: ${fact}`}/></figure>
  <div className="card-body">
    <h2 className="card-title">Imagenes de gatos!</h2>
    <p>{fact}</p>
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
