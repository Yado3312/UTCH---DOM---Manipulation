"use client";
import React, { useState } from 'react';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div id="accordion-component" className="card shadow-sm h-100" data-testid="accordion-container">
      <div className="card-body">
        <h5 className="card-title mb-3">Colapsible Rendering</h5>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button 
                id="accordion-header-btn"
                className={`accordion-button ${isOpen ? '' : 'collapsed'}`} 
                type="button" 
                data-testid="accordion-header-btn"
                onClick={() => setIsOpen(!isOpen)}
              >
                Thhjis is hidden 
              </button>
            </h2>
            <div 
              id="accordion-collapse-body" 
              className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
              data-testid="accordion-collapse-body"
            >
              <div className="accordion-body">
                <p id="accordion-content" className="mb-0 text-muted" data-testid="accordion-content">
                  This localized content was rendered with the DOM. xd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}