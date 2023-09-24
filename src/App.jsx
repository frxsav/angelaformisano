import React from "react";
import Navbar from "./pages/header/Navbar";
import About from "./pages/main/About";
import Treatments from "./pages/main/Treatments";
import Where from "./pages/main/Where";

function App() {
  return (
    <>
      <div className="h-full w-full bg-c-outside lg:p-16 p-2 divide-y-2 divide-c-outside">
        <header className="w-full bg-c-inside">
          <Navbar></Navbar>
        </header>
        <main className="bg-c-inside text-c-text divide-y-[25px] divide-c-outside">
          <About></About>
          <Treatments></Treatments>
          <Where></Where>
        </main>
      </div>
    </>
  );
}

export default App;
