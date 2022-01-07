import { useState } from "react";
import './App.css';
export default function App()
{
  const [message,setmessage]=useState("");
  const [messageList,setmessageList]=useState([]);
  const processmessage=(e)=>
  {
    setmessage(e.target.value);
  }
  const handlesend=()=>
  {
    const newList=[message,...messageList];
    setmessageList(newList);
    setmessage("");
  }
  return <div>
    <header className="bg-dark text-light p-3" id="op">
      MyChatApp by (Onkar Chaudhari) (075_KH)    
    </header>
    <div>
        <input className="form-control mt-2" type="text" id="text" value={message} placeholder="Lets Chat Here..." onChange={processmessage} />
        <input className="btn btn-primary w-100 wt-2" type="button" id="send" value="SEND" onClick={handlesend} />
    </div>
    { messageList.map((item,index) => (
        <div className="bg-secondary bg-opacity-50 mt-1" id="map" key={index}>{item}</div>
        ))}
      
  </div>
}


