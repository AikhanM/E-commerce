import Navbar from "./components/navbar.jsx";
import { RouterElement } from "./Router.js";

function App() {
  return (
    <div className="bg-black w-full h-full">
      <Navbar />
      <RouterElement />
    </div>
  );
}

export default App;
