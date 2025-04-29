import "./App.css";
import Hero from "./components/Hero";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />
      <main className="bg-white container mx-auto flex flex-col md:flex-row px-8">
        <LeftSide />
        <Hero />
        <RightSide />
      </main>
    </div>
  );
}

export default App;
