import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");
  
  useEffect(()=>{
    fetch("https://app-eco9ruibl-a-s-poornas-projects.vercel.app/message")
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
