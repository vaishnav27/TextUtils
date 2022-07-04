import { useState } from "react";
import "./App.css";
import Alert from "./MyComponents.js/Alert";
// import About from "./MyComponents.js/About";
import Navbar from "./MyComponents.js/Navbar";
import TextForm from "./MyComponents.js/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [changeMode, setChangeMode] = useState("Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setChangeMode("Dark Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      setChangeMode("Light Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeMode={changeMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />

        <TextForm
          showAlert={showAlert}
          heading={"Enter Your Text Here"}
          mode={mode}
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
