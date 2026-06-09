"use client";
import React, { useState } from 'react';

export default function Footer() {
  const [clicked, setClicked] = useState(false);

  return (
    <footer 
      id="footer-main" 
      className={`mt-auto py-4 text-center transition-all ${clicked ? 'bg-success text-white' : 'bg-dark text-white-50'}`} 
      data-testid="footer-container"
    >
      <div className="container">
        <p id="footer-text" className="mb-2" data-testid="footer-text">
          Yadier Arturo Gonzalez Flores IDGBIS81N homework professional web development 
        </p>
        <button 
          id="footer-action-btn"
          className={`btn btn-sm ${clicked ? 'btn-light text-success fw-bold' : 'btn-outline-light'}`}
          data-testid="footer-action-btn"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? 'Please I need a 10 Teacher' : 'Click here to give me a 10 :D '}
        </button>
      </div>
    </footer>
  );
}