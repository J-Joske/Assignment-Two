import React from `react`;
import './Styles/App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
