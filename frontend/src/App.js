import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");
  
  
    fetch("https://app-two-opal.vercel.app/message")
    .then((res) =>res.json())
    .then((data)=>setMessage(data.message));
 

 

  return (
    <div><h1>
      Hello {message}
      </h1> </div>
  );
}

export default App;
