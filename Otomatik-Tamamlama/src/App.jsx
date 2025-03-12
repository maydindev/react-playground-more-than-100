import "./styles.css";
import ToDoList from "./components/ToDoList";
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <ToDoList />
      <BottomBar />
    </div>
  );
}
