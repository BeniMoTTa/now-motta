import Index from "./components/home";
import "./App.css";
import { useState } from "react";
import EnterSite from "./components/enterSite/index";

function App() {
  const [access, setAccess] = useState(false);
  return (
    <div>
      {access ? (
        <EnterSite setAccess={setAccess} />
      ) : (
        <Index setAccess={setAccess} />
      )}
    </div>
  );
}

export default App;
