import { useState, useRef } from 'react'
import '../styles/App.css'
import getListAndCachePokemons from '../scripts/getPokeData'
import Welcome from '../modules/Welcome'
import Game from '../modules/Game'



function App() {
  const [list, setList] = useState([]);

  async function getList() {
    let newList = await getListAndCachePokemons(20, 250);
    console.log(newList); //Logging the new list to the console for debugging purposes
    setList([...newList]); //Updating the list with new data
  }

  return (
    <>
      {list.length == 0 ? <Welcome getList={getList}/> : <Game list={list}/>}
    </>
  )
}

export default App
