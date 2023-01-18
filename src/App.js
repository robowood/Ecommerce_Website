import {useState} from "react";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Store from "./Components/Store/Store";
import PageSummary from "./Components/UI/PageSummary";
import Cart from "./Components/Cart/Cart";
function App() {

  const[cartVisible,setCartVisible]=useState(false);

  const showCartHandler=()=>{
    setCartVisible(true);
  }
  const hideCartHandler=()=>{
    setCartVisible(false);
  }
  return (
    <div>
    <Header onShowCart={showCartHandler}/>
    <PageSummary/>
    <Store/>
   { cartVisible && <Cart onClose={hideCartHandler}/>}
    <Footer/>
    </div>
      );
}

export default App;
