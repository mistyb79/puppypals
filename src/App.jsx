import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  console.log(puppyList);

  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return <p>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App