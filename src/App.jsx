import React from "react";
import Navbar from "./pages/header/Navbar";
import About from "./pages/main/About";
import Treatments from "./pages/main/Treatments";
import Where from "./pages/main/Where";

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
