// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
// import  from "./Components/";

function App() {

  const onDelete = (todo) => {
    console.log("On Delete Function.", todo);
  }

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      description: "Need to get groceries."
    },
    {
      sno: 2,
      title: "Go to the mall",
      description: "Need to get wedding dress."
    },
    {
      sno: 3,
      title: "Go to the treasure island.",
      description: "Enjoy the rides."
    },
  ]

  return (
    <>
      <Header title="Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
 