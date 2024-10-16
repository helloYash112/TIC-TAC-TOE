

export function GameBoard({showActivePlr,bord}){

  
    return <ol id="game-board">
        {
            bord.map((row,rowIdx)=><li key={rowIdx}>
             <ol>
              {
                row.map((plrSbl,colIdx)=><li key={colIdx}><button onClick={()=>showActivePlr(rowIdx,colIdx)} disabled={plrSbl !=null}>{plrSbl}</button></li>)
              }
             </ol>
            </li>
            )
        }
    </ol>
};