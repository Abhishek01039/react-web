import React, { useEffect, useState } from "react";

const Api = () => {
  // create state
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // it's call the api and when data comes then change the state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((e) => e.json())
      .then((e) => {
        setTimeout(() => {
          setTodo(e);
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <div>
      <h1>Title is</h1>
      {/* iterate the list and show it in UI */}
      <h2>{isLoading && <p>Loading...</p>}</h2>
      <h2>{todo.map((e) => e.title)}</h2>
    </div>
  );
};

export default Api;
