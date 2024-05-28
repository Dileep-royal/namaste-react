
import React from "react";
import ReactDOM from "react-dom/client";

// importing components
import Header  from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App =()=> (
    <>
       <Header />
       <Body />
       {/* <Footer /> */}
    </>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
