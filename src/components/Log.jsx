export function Log({turn}){
      return <ol id="log">
      {turn.map(item=><li className="highlighted"  key={`${item.squre.row}${item.squre.col}`}>({item.squre.row},{item.squre.col})
          SELECTED  {item.symbol}

      </li>)}
    </ol>
}