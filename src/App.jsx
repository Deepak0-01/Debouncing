import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchItem from "./components/SearchItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center bg-gray-400 h-screen">
      <SearchItem />
    </div>
  );
}

export default App;
