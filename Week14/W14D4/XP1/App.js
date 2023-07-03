import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { HomeScreen, ProfileScreen, ShopScreen } from "./screens";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeScreen, ProfileScreen, ShopScreen } from "./screens";



function App() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
  
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shop" element={<ShopScreen />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
  
  export default App;
  