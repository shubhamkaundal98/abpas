import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header, Footer } from "./components/components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full flex flex-wrap content-between font-sans container">
      <div className="w-full block content">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
