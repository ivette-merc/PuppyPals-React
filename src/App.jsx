//import { useState } from "react";
import { useState } from "react";
import "./App.css";

import { puppyList } from "./data.js";

function App() {
  console.log(useState);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div className="App">
        <h1>Get to know our Puppies 🐶!</h1>
        {puppies.map((puppy) => {
          return (
            <p className = "puppylist"
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {" "}
              {puppy.name}
            </p>
          );
        })}
        {featPupId && ( //why can {featPupId} be written outside the div?
          <div className="puppyinfo">
            <h2>{featuredPup.name}</h2>
            <ul className="listDetail">
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
