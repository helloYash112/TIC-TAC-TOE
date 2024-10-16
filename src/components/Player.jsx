import { useState } from "react"
export function Player({name,symbol,isValid,onUdtName}){
    const [edited,isEdited]=useState(false);
    const[nameChange,udtName]=useState(name);
    function changeEditing(){
        isEdited((editing)=>!editing);
        onUdtName(symbol,nameChange);
    }
    function handleName(event){
        
        udtName(event.target.value);
    }
    let nameEdited=<span className='player-name'>{nameChange}</span>;
    if(edited){
        nameEdited=<input type="text" required value={nameChange} onChange={handleName}></input>
    }
    return(<li className={isValid ? "active" :undefined}>
             <span className="player">
                {nameEdited}
                <span className="player-symbol">{symbol}</span>
             </span>
             <button onClick={changeEditing}>{edited ? 'save' :"edit"}</button>
    </li>)
}