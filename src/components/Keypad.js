import React from "react"
function keypadEntry(){
    console.log("Entering password...")
}


function Keypad (){
    return (
        <div>
            <input type="password" onChange={keypadEntry}/>
        </div>
    )
}

export default Keypad;