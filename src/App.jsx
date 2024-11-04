import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PrimeReactProvider } from "primereact/api";
import { MyStyle } from "./layout/Mystyle";
import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // استخدام setTimeout كمثال للمحاكاة
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // يمكنك تعديل الوقت حسب الحاجة

    // إزالة التايمر عند الانتهاء
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <PrimeReactProvider value={{ unstyled: true, pt: MyStyle }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PrimeReactProvider>
      )}
    </>
  );
}

export default App;
