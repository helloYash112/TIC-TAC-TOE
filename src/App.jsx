import {Player} from './components/Player'
import { GameBoard } from './components/GameBoard'
import { useState } from 'react'
import { Log } from './components/Log';
function App() {
  const[activePlr,setActivePlr]=useState('X');
  const[preArr,udtArr]=useState([]);
  function handleActivePlayer(rowIdx,colIdx){
   console.log('u called active player');
   setActivePlr((plr)=>plr== 'X' ? 'O' : 'X');
   
   udtArr(oldArr=>{
      let smbl = 'X';
      if( oldArr.length>0 && oldArr[0].symbol=='X'){
         smbl='O';
      }
      const newArr=[{squre:{row :rowIdx ,col :colIdx}, symbol :smbl},...oldArr];
      return newArr;

   })
  }

  return (<main>
   <div id="game-container">
    <ol id="players">
       <Player name='player 1' symbol='X' isValid={activePlr=='X'}/> 
       <Player name='player 2' symbol='O' isValid={activePlr=='O'} />    
    </ol>
    <GameBoard showActivePlr={handleActivePlayer} turn={preArr}/>
    </div>
    
    <Log turn={preArr} />
 </main> )
}

export default App
