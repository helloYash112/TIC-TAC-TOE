import { useState } from "react";
const plrBrd=[[null,null,null],[null,null,null],[null,null,null]];
export function GameBoard({showActivePlr,plrSybl}){
      const[preArr,udtArr]=useState(plrBrd);
      function plrSelectedBox(rowIndex,colIndex){
        udtArr(preArrays=>{
            const newArr=[...preArrays.map(innerArr=>[...innerArr])];
            newArr[rowIndex][colIndex]=plrSybl;
            return newArr;
        })
        showActivePlr();
      }
    return <ol id="game-board">
        {
            preArr.map((row,rowIdx)=><li key={rowIdx}>
             <ol>
              {
                row.map((plrSbl,colIdx)=><li key={colIdx}><button onClick={()=>plrSelectedBox(rowIdx,colIdx)}>{plrSbl}</button></li>)
              }
             </ol>
            </li>
            )
        }
    </ol>
};