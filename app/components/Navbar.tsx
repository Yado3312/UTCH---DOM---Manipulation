"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');
  const navItems = ['Dashboard', 'Diagnostics', 'Reports'];

  return (
    <nav id="navbar-main" className="navbar navbar-expand navbar-dark bg-dark px-4" data-testid="navbar-container">
      <span id="navbar-brand" className="navbar-brand fw-bold" data-testid="navbar-brand">
        Yadier OH YEAH HOMEWORK
      </span>
      <div className="collapse navbar-collapse">
        <ul id="navbar-list" className="navbar-nav ms-auto" data-testid="navbar-list">
          {navItems.map((item) => (
            <li key={item} className="nav-item">
              <button
                id={`nav-item-${item.toLowerCase()}`}
                className={`nav-link btn btn-link ${activeItem === item ? 'active fw-bold text-white' : ''}`}
                data-testid={`nav-item-${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}