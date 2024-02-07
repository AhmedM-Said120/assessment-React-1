import React, { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayOut from "./Components/MasterPage/MasterLayOut";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import NotFound from "./Components/NotFound/NotFound";

class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "",
        element: <MasterLayOut />,
        children: [
          { path: "", element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "contact", element: <Contact /> },
          { path: "about", element: <About /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "*", element: <NotFound/> }
        ],
      },
    ]);
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
