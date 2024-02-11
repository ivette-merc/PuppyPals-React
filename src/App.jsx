//import { useState } from "react";
import { useState } from "react";
import "./App.css";

import { puppyList } from "./data.js";

function App() {
  console.log(useState);
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppies);
  return (
    <>
      <div className="App">
        <h1>Get to know our Puppies 🐶!</h1>
        {puppies.map((puppy) => {
          return <p key={puppy.id}> {puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
