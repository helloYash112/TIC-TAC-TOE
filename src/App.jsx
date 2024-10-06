import {Player} from './components/Player'
import { GameBoard } from './components/GameBoard'
import { useState } from 'react'
function App() {
  const[activePlr,setActivePlr]=useState('x');
  function handleActivePlayer(){
   setActivePlr((plr)=>plr=== 'x' ? 'o' : 'x');
  }

  return (<main>
   <div id="game-container">
    <ol id="players">
       <Player name='player 1' symbol='x' isValid={activePlr=='x'}/> 
       <Player name='player 2' symbol='o' isValid={activePlr=='o'} />    
    </ol>
    <GameBoard showActivePlr={handleActivePlayer} plrSybl={activePlr}/>
    </div>
    
    
 </main> )
}

export default App
