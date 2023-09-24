import React from "react";
import Navbar from "./pages/header/Navbar";
import About from "./pages/main/About";
import Treatments from "./pages/main/Treatments";
import Where from "./pages/main/Visit";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <div className="h-full w-full bg-c-outside lg:px-16 lg:pt-16 px-2 pt-2 divide-y-2 divide-c-outside">
        <header className="w-full bg-c-inside">
          <Navbar></Navbar>
        </header>
        <main className="bg-c-inside text-c-text divide-y-[20px] divide-c-outside">
          <About></About>
          <Treatments></Treatments>
          <Where></Where>
        </main>
        <footer className="divide-y-[20px] divide-c-outside">
          <div></div>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}

export default App;
