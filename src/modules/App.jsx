import { useState, useRef } from 'react'
import '../styles/App.css'

import getListAndCachePokemons from '../scripts/getPokeData'

import Welcome from '../modules/Welcome'
import Game from '../modules/Game'
import Footer from '../modules/Footer'



function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getList() {
    setLoading(true); //Start loading animation
    let newList = await getListAndCachePokemons(20, 250);
    console.log(newList); //Logging the new list to the console for debugging purposes
    setList([...newList]); //Updating the list with new data
    setLoading(false); //Stop loading animation when data is fetched and updated.
  }

  return (
    <>
      <header>
        <p className='title'>Memory Card</p>
      </header>

      <section className='introContainer'>
        {list.length == 0 ? <Welcome getList={getList}/> : <Game list={list} getList={getList}/>}
        {loading &&
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        }

      </section>
      <Footer link="https://github.com/Andrefe91/react_project_memoryCard"/>
    </>
  )
}

export default App
