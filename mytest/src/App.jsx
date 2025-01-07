import { useState, useEffect } from "react";
function App(){
    const [count, setCount]=useState(0);
    useEffect(()=>{
        console.log("clicked");
    })
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>click me</button>
                    </div>
    )
}
export default App;