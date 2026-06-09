"use client";
import React, { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div id="modal-wrapper" className="card shadow-sm h-100" data-testid="modal-wrapper">
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <h5 className="card-title">Modal</h5>
        <button 
          id="modal-open-btn"
          className="btn btn-dark mt-3"
          data-testid="modal-open-btn"
          onClick={() => setIsOpen(true)}
        >
          Initialize Modal Overlay
        </button>

        {isOpen && (
          <div id="modal-overlay" className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} data-testid="modal-overlay">
            <div className="modal-dialog modal-dialog-centered">
              <div id="modal-content" className="modal-content" data-testid="modal-content">
                <div className="modal-header">
                  <h5 id="modal-title" className="modal-title" data-testid="modal-title">Surprise modal</h5>
                  <button type="button" className="btn-close" onClick={() => setIsOpen(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body text-start">
                  <p id="modal-text" data-testid="modal-text">This modal can be used to show important data or even obstruct the view, this depends</p>
                </div>
                <div className="modal-footer">
                  <button 
                    id="modal-close-btn"
                    className="btn btn-secondary"
                    data-testid="modal-close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}