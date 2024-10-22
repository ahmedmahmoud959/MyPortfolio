import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import { MyStyle } from "./layout/Mystyle";

function App() {
  return (
    <>
      <PrimeReactProvider value={{ unstyled: true, pt: MyStyle }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PrimeReactProvider>
    </>
  );
}

export default App;
