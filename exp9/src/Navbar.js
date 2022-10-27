import React from "react";
import "./App.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div class="nav-wrapper white">
          <a href="/" id="pl" className="brand-logo left">
            Ayush
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
