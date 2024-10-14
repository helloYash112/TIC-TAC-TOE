
const plrBrd=[[null,null,null],[null,null,null],[null,null,null]];
export function GameBoard({showActivePlr,turn}){
let preArr=plrBrd;
 for(const data of turn){
    const{squre,symbol}=data;
    const{row,col}=squre;
    preArr[row][col]=symbol;
 }
  
    return <ol id="game-board">
        {
            preArr.map((row,rowIdx)=><li key={rowIdx}>
             <ol>
              {
                row.map((plrSbl,colIdx)=><li key={colIdx}><button onClick={()=>showActivePlr(rowIdx,colIdx)}>{plrSbl}</button></li>)
              }
             </ol>
            </li>
            )
        }
    </ol>
};