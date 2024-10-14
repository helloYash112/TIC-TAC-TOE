
const plrBrd=[[null,null,null],[null,null,null],[null,null,null]];
export function GameBoard({showActivePlr,turn}){
const preArr=plrBrd;
 for(const turn of turn){
    const{squre,symbol}=turn;
    const{row,col}=squre;
    preArr[row][col]=symbol;
 }

  /*
      const[preArr,udtArr]=useState(plrBrd);
      function plrSelectedBox(rowIndex,colIndex){
        udtArr(preArrays=>{
            const newArr=[...preArrays.map(innerArr=>[...innerArr])];
            newArr[rowIndex][colIndex]=plrSybl;
            return newArr;
        })
            
        showActivePlr();*/
       
      
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