import Header from "./pages/Header/Header";
import Banner from "./pages/Banner/Banner";
import Services from "./pages/Services/Services";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Routes>
      <Route path="/" element/>
    </Routes> */}
      <Header />
      <Banner />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
