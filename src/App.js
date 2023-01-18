import React from "react";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Store from "./Components/Store/Store";
import PageSummary from "./Components/UI/PageSummary";
function App() {
  return (
    <div>
    <Header/>
    <PageSummary/>
    <Store/>
    <Footer/>
    </div>
      );
}

export default App;
