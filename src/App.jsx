import {Player} from './components/Player'
import { GameBoard } from './components/GameBoard'
import { useState } from 'react'
import { Log } from './components/Log';
import { WINNING_COMBINATIONS } from './components/WINNING_COMBINATION.JS';
import Result from './components/Result';
const plrBrd=[[null,null,null],[null,null,null],[null,null,null]];


function App() {
  
  const[preArr,udtArr]=useState([]);
  const plrSmbl={
   'X' :'player 1',
   'O' :'player 2'
  }
  const[currPlr,setPlr]=useState(plrSmbl);
  let winning;
  
  let intialGameBoard= [...plrBrd.map(innerArr=> [...innerArr])];
  
  for(const data of preArr){
     const{squre,symbol}=data;
     const{row,col}=squre;
     intialGameBoard[row][col]=symbol;
  }

  for(const combination of WINNING_COMBINATIONS){
   const fps=intialGameBoard[combination[0].row][combination[0].column];
   const sps=intialGameBoard[combination[1].row][combination[1].column];
   const tps=intialGameBoard[combination[2].row][combination[2].column];
   
   
   if(fps && fps===sps && fps===tps){
      winning=currPlr[fps];
   }
  }
 const draw=(preArr.length== 9 && !winning);

  const activePlr=setPlrSym(preArr);
  function setPlrSym(preArr){
   let smbl = 'X';
   if( preArr.length>0 && preArr[0].symbol=='X'){
      smbl='O';
   }
      return smbl;
  }
  function handleActivePlayer(rowIdx,colIdx){
   
   udtArr(oldArr=>{
     
        const smbl=setPlrSym(oldArr);
      const newArr=[{squre:{row :rowIdx ,col :colIdx}, symbol :smbl},...oldArr];
      return newArr;

   })
  }
  function rematch(){
      udtArr([]);
     }

function setPlayerName(symbol,name){
   setPlr(oldPlr=>{
      return {
         ...oldPlr,
         [symbol] :name
      }
   })
}

  return (<main>
   <div id="game-container">
    <ol id="players">
       <Player name={currPlr['X']} symbol='X' isValid={activePlr=='X'} onUdtName={setPlayerName}/> 
       <Player name={currPlr['O']} symbol='O' isValid={activePlr=='O'} onUdtName={setPlayerName}/>    
    </ol>
    {(winning || draw) && <Result winner={winning} match={rematch} />}
    <GameBoard showActivePlr={handleActivePlayer} bord={intialGameBoard}/>
    </div>
    
    <Log turn={preArr} />
 </main> )
}

export default App
