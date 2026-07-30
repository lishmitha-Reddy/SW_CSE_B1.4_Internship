import Button from './Components/Functionalcomponents'
import {LeftArrow,RightArrow  } from "./Components/Functionalcomponentstwo"
const name ="Lishmitha";
const isloggedIn = true;


function App() {
  

  return (
    // React Fragments
    <>
      {/* JSX
      Rule 1: Return one parent element
       */}
       <h1>Hello</h1>
       <p> Hello again </p>

       {/* JSX
      Rule 2: Every tag must be closed properly
       */}
       
       <p> Error</p>
       <input type="text"/>

       {/* JSX
      Rule 3: use camelCase for attributes
       */}
       <button onClick onSubmit>Click</button>

      {/* JSX
      Rule 4: Embedding Javascript with curly braces 
       */}
       <h3> Hello, {name} </h3>

      {/* JSX
      Rule 5: use experissions,not statements 
       */}
       <p>{isloggedIn ? "Welcome Back" : "please login "} </p>

      <Button />
      <LeftArrow/>
      <RightArrow/>
    </>
  )
}


export default App
