import Sq from "./sq";
import { useState } from "react";

function NavBar() {
   const[xIsNext,setXIsNext]=useState(true)
   const[sq,setsq]=useState(Array(9).fill(null));

  function handleclick(i){
    if(sq[i]){
      return;
    }
    if(calwinner(sq)|| sq[i]){
      return;
    }

    const nextsq=sq.slice();
    if(xIsNext){
      nextsq[i]="X";

    }
    else{
      nextsq[i]="O";
    }
    setsq(nextsq);
    setXIsNext(!xIsNext);
  }
    const winner = calwinner(sq);
  const gameStatus = winner
    ? `Winner: ${winner}` 
    : `Next player: ${xIsNext ? "X" : "O"}`
  
  function calwinner(sq){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0; i<lines.length;i++){
      const [a,b,c]=lines[i];
      if(sq[a]&&sq[a]===sq[b]&&sq[a]===sq[c]){
        return sq[a];
      }
     
    }
    return null;
 
  }
function reset(){
  setsq(Array(9).fill(null));
  setXIsNext(true);
}
return (
    <div className="top-0 bottom-0 text-center mt-20">
      <div className="mb-2">{gameStatus}</div>
     
        <div className="grid grid-cols-3 border border-black w-60 mx-auto">
        { sq.map((value,index)=>(
        <div  key={index} className="border border-black w-20 h-20 flex items-center justify-center"> 
        <Sq value={value} sqclick={()=>handleclick(index)}/>
        </div>
      ))}
      </div>
      <div> <button className="border border-gray-300 bg-sky-800 w-20 h-12 mt-4 rounded-md hover:bg-sky-400" onClick={reset}>Restart</button></div>
    </div>
  );
}


export default NavBar;
