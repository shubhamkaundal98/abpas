import "./App.css";
import { Header, Footer } from "./components/components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full max-w-full flex flex-wrap content-between font-sans container">
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
