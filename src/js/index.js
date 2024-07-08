//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home";

//render your react application
ReactDOM.createRoot(document.getElementById("app")).render(<Home />);
