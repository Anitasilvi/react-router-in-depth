import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function RootLayout() {
  return;
  <div className="root-layout">
    <header>
      <nav>
        <h1>React Router</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink path="about">About</NavLink>
      </nav>
    </header>

    <main>
      <Outlet></Outlet>
    </main>
  </div>;
}
