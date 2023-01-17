// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header";
import { AddTodo } from "./Components/AddTodo";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("On Delete Function.", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding Todo", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todos List" searchBar={false} />

        <Routes>
          <Route
            exact
            path="/"
            element={ <AddTodo addTodo={addTodo} />}
            // render={() => {
            //   return (
            //     <>
            //       <AddTodo addTodo={addTodo} />
            //       <Todos todos={todos} onDelete={onDelete} />
            //     </>
            //   );
            // }}
          />
          <Route exact path="/" element={<Todos todos={todos} onDelete={onDelete} />}/>
          <Route exact path="/about" element={<About />}/>
            
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
