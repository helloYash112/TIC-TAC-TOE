const plrBrd=[[null,null,null],[null,null,null],[null,null,null]];
export function GameBoard(){
    return <ol id="game-board">
        {
            plrBrd.map((row,rowIdx)=><li key={rowIdx}>
             <ol>
              {
                row.map((plrSbl,colIdx)=><li key={colIdx}><button>{plrSbl}</button></li>)
              }
             </ol>
            </li>
            )
        }
    </ol>
};