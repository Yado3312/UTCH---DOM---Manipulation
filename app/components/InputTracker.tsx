"use client";
import React, { useState } from 'react';

export default function InputTracker() {
  const [text, setText] = useState<string>('');

  return (
    <div id="input-tracker-component" className="card shadow-sm h-100 border-warning" data-testid="input-tracker-container">
      <div className="card-body">
        <h5 id="input-tracker-title" data-testid="input-tracker-title">Input tracker</h5>
        
        <input
          id="tracker-input"
          type="text"
          className="form-control mb-3"
          data-testid="tracker-input"
          placeholder="Write here please"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p id="tracker-output" className="text-muted" data-testid="tracker-output">
          Live content: <strong id="tracker-text-node" className="text-dark" data-testid="tracker-text-node">{text || '(empty)'}</strong>
        </p>

        <button 
          id="tracker-clear-btn"
          className="btn btn-warning w-100 fw-bold"
          data-testid="tracker-clear-btn"
          onClick={() => setText('')}
        >
          Clean
        </button>
      </div>
    </div>
  );
}