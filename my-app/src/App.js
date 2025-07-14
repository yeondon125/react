import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState(0);
  const handleClick = () => {
    setPost(post + 1);
  };
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen text-3xl flex-col">
        <div>
          <button
            onClick={handleClick}
            className="border-2 border-black bg-black text-white p-[10px]"
          >
            클릭하세요
          </button>
        </div>
        <div>{post}</div>
      </div>
    </div>
  );
}

export default App;
