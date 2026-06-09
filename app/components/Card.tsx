"use client";
import React, { useState } from 'react';

export default function Card() {
  const [acknowledged, setAcknowledged] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div id="card-component" className="card shadow-sm h-100" data-testid="card-container">
      <div className="card-body">
        <h5 id="card-title" className="card-title" data-testid="card-title">Assesment or checking</h5>
        <p id="card-desc" className="card-text text-muted" data-testid="card-desc">
          This is a DOM section that works as a boolean state or checker, this is like teh checkbox but with another style. Use full to indicate status
        </p>
        
        <div id="card-actions" className="d-flex gap-2 mt-3" data-testid="card-actions">
          <button 
            id="card-acknowledge-btn"
            className={`btn ${acknowledged ? 'btn-success' : 'btn-outline-secondary'}`}
            data-testid="card-acknowledge-btn"
            onClick={() => setAcknowledged(!acknowledged)}
          >
            {acknowledged ? 'True' : 'False'}
          </button>

          <button 
            id="card-details-btn"
            className="btn btn-outline-primary"
            data-testid="card-details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>

        {showDetails && (
          <div id="card-details-content" className="alert alert-info mt-3 mb-0 p-2" data-testid="card-details-content">
            <small>Element in the DOM mutated from the tree</small>
          </div>
        )}
      </div>
    </div>
  );
}