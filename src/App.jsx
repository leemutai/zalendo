import React from "react";

const App = () => {
  const name = "John Doe";
  const x = 10;
  const y = 20;
  //using loops and rebdering elements/lists
  const names = ["Brad", "Mary", "John", "Kelly"];
  const loggedIn = true;
  // if (loggedIn) {
  //   return <h1>Hello member</h1>;
  // }
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
      {loggedIn ? <h1>Hello member</h1> : <h1>Hello Guest</h1>}
    </>
  );
};

export default App;
