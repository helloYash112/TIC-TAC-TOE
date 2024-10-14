import {Player} from './components/Player'
import { GameBoard } from './components/GameBoard'
import { useState } from 'react'
function App() {
  const[activePlr,setActivePlr]=useState('x');
  const[preArr,udtArr]=useState([]);
  function handleActivePlayer(rowIdx,colIdx){
   setActivePlr((plr)=>plr=== 'x' ? 'o' : 'x');
   
   udtArr(oldArr=>{
      let smbl = 'x';
      if( oldArr.length()>0 && oldArr[0].symbol==='x'){
         smbl='o';
      }
      const newArr=[{squre:{row :rowIdx ,col :colIdx}, symbol :smbl},...oldArr];
      return newArr;

   })
  }

  return (<main>
   <div id="game-container">
    <ol id="players">
       <Player name='player 1' symbol='x' isValid={activePlr=='x'}/> 
       <Player name='player 2' symbol='o' isValid={activePlr=='o'} />    
    </ol>
    <GameBoard showActivePlr={handleActivePlayer} turn={preArr}/>
    </div>
    
    
 </main> )
}

export default App
