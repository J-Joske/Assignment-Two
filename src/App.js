import React from 'react';
import './Styles/App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundaries';

function App() {
  return (
    <div className="App">

      <ErrorBoundary>

      <Navigation />

      </ErrorBoundary>

      <ErrorBoundary>

      <Header />

      </ErrorBoundary>
      <ErrorBoundary>

      <Main />

      </ErrorBoundary>

      <ErrorBoundary>

      <Footer />

      </ErrorBoundary>
    </div>
  );
}

export default App;
