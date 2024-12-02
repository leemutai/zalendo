import React from "react";

const App = () => {
  const name = "John Doe";
  const x = 10;
  const y = 20;
  //using loops and rebdering elements/lists
  const names = ["Brad", "Mary", "John", "Kelly"];
  return (
    <>
      <div className="text-5xl">App</div>
      <p>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map(name, (index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
