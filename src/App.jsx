//import { useState } from "react";
import { useState } from "react";
import "./App.css";

import { puppyList } from "./data.js";

function App() {
  console.log(useState);
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
