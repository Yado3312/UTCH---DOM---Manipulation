"use client";
import React, { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const options = ['Overview', 'Configuration', 'Preferences'];

  return (
    <aside 
      id="sidebar-main" 
      className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-secondary transition-all`}
      style={{ width: isExpanded ? '250px' : '80px', minHeight: '100vh', transition: 'width 0.3s' }}
      data-testid="sidebar-container"
    >
      <button 
        id="sidebar-toggle-btn"
        className="btn btn-dark w-100 mb-4" 
        data-testid="sidebar-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '1' : '0'}
      </button>

      <ul id="sidebar-menu" className="nav nav-pills flex-column mb-auto" data-testid="sidebar-menu">
        {options.map((opt, index) => (
          <li key={index} className="nav-item mb-2">
            <button
              id={`sidebar-opt-${index}`}
              className={`nav-link text-white text-start w-100 ${selectedOpt === index ? 'active bg-danger' : ''}`}
              data-testid={`sidebar-opt-${index}`}
              onClick={() => setSelectedOpt(index)}
            >
              {isExpanded ? opt : opt.charAt(0)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}