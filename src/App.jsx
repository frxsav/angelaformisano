import React from "react";
import Navbar from "./components/header/Navbar";
import About from "./components/main/About";
import Treatments from "./components/main/Treatments";
import Where from "./components/main/Where";

function App() {
  return (
    <>
      <div className="h-full bg-c-outside p-16 divide-y-2 divide-c-outside">
        <header className="w-full bg-c-inside h-[100px]">
          <Navbar></Navbar>
        </header>
        <main className="bg-c-inside text-c-text">
          <About></About>
          <Treatments></Treatments>
          <Where></Where>
        </main>
      </div>
    </>
  );
}

export default App;
