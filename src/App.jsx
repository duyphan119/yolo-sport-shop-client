import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import WelcomeHeader from "./components/welcomeheader/WelcomeHeader";
import Home from "./pages/home/Home";
import "./app.scss"
const App = () => {
  return (
    <>
      <WelcomeHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
