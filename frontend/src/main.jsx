import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter,  Routes } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='/' element={<SignUp />} />
//       <Route path='/login' element={<Login />}/>
//     </Route>

//   )
// )

// const router = createBrowserRouter([
//   <BrowserRouter>
//     <Routes>
//       <Route path="/login" component={<Login />} />
//       <Route path="/home" component={<Home />} />
//       <Route path="/" component={<SignUp />} />
//     </Routes>
//   </BrowserRouter>
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
