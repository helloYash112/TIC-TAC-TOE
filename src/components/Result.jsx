export default function Result({winner,match}){
    return<div id="game-over">
        <h2>GAME OVER !</h2>
        
            
      {winner && <p>
        WINNER WON {winner}
       </p>}
       {
       (!winner)&& <p>
            it's draw
        </p>
       }

       <p>
        <button onClick={match}>REMATCH !</button>
       </p>
    </div>
}