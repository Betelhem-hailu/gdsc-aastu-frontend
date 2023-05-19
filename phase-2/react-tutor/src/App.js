import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import User from './components/User';
import Navbar from './components/Navbar';


// function App() {
//   const [count, set_count] = useState(0);
//   return (
//     <div className='App'>
//     <p>{count}</p>
//     <button onClick={()=>set_count(count+5)}>Click me</button>
//     </div>
//   );
// }

// export default App
{/*
export default function App(){

  const [isLodding, setLodding] = useState(true);
  const [isCompleted, setCompleted] = useState(false);
  const [isData, setData] = useState([]);
  
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=> {
      setCompleted(true)
      setData(data);
      setLodding(false);
    }).catch(err=> console.log(err));
    
  })

  return(
    <div>
    {isLodding === true? "Loading" : ''}
    {isCompleted === true? isData.map(user => <div>{user.title}</div>): ""}
    </div>
  );
}
*/}

export default function App(){


  return(
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Blogs />}/>
    <Route path='home' element={<Home />}/>
    <Route path='user' element={<User />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
