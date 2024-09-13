import { useState } from "react"

function App() {
  let [color, setColor] = useState("#414141")

  return (
    <div className="h-screen m-0 p-0 duration-150" style={{backgroundColor:color}}>
      <div
        className="fixed  flex  justify-center bottom-20  inset-x-0 ">
        <div className="flex justify-center bg-white px-7 py-2 rounded-full">
          <button onClick={()=>setColor("red")} className="bg-red-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Red</button>
          <button onClick={()=>setColor("black")} className="bg-black text-white mx-3 text-2xl py-1 px-4 rounded-full">Black</button>
          <button onClick={()=>setColor("green")} className="bg-green-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Green</button>
          <button onClick={()=>setColor("blue")} className="bg-blue-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Blue</button>
          <button onClick={()=>setColor("pink")} className="bg-pink-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Pink</button>
          <button onClick={()=>setColor("orange")} className="bg-orange-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Orange</button>
          <button onClick={()=>setColor("yellow")} className="bg-yellow-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Yellow</button>
          <button onClick={()=>setColor("violet")} className="bg-violet-700 text-white mx-3 text-2xl py-1 px-4 rounded-full">Violet</button>
        </div>
      </div>
    </div>
  )
}
export default App
