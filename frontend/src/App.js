import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");
  
  useEffect(()=>{
    fetch("http://localhost:8000/message")
    .then((res) =>res.json())
    .then((data)=>setMessage(data.message));
  }, []);

  return (
    <div><h1>
      Hello {message}
      </h1> </div>
  );
}

export default App;
