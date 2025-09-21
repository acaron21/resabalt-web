import { useState } from "react";
import { sayHello } from "./hello";

function App() {
  
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onClick = async () =>{
    const res = await sayHello(name);
    setMessage(res)
  }

  return (
    <>
    <div className="flex flex-row items-center gap-2 p-5">
      <input value={name} onChange={(e)=>setName(e.currentTarget.value)} className="p-2 shadow-xl border-1 border-gray-400" type="text" />
      <div onClick={()=>onClick()} className="p-3 bg-red-300 shadow-md rounded-md text-center select-none cursor-pointer hover:shadow-xl">Bouton hello</div>
    <div>
      {message}
    </div>
    </div>
    
    </>
    
  )
}

export default App
