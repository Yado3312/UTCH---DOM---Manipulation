"use client";
import React, { useState } from 'react';

export default function ProgressTracker() {
  const [progress, setProgress] = useState<number>(0);

  const advanceProgress = () => setProgress((prev) => Math.min(prev + 25, 100));
  const revertProgress = () => setProgress((prev) => Math.max(prev - 25, 0));

  return (
    <div id="progress-component" className="card shadow-sm h-100 border-primary" data-testid="progress-container">
      <div className="card-body text-center">
        <h5 id="progress-title" data-testid="progress-title">Progress bar </h5>
        <p className="text-muted small">a continuous indicator of progress or percentage</p>
        
        <div className="progress my-3" style={{ height: '25px' }}>
          <div 
            id="progress-bar-fill"
            className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
            role="progressbar" 
            style={{ width: `${progress}%` }}
            aria-valuenow={progress} 
            aria-valuemin={0} 
            aria-valuemax={100}
            data-testid="progress-bar-fill"
          >
            {progress}%
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2">
          <button 
            id="btn-revert" 
            className="btn btn-outline-danger" 
            data-testid="btn-revert"
            onClick={revertProgress}
            disabled={progress === 0}
          >
            less
          </button>
          <button 
            id="btn-advance" 
            className="btn btn-primary" 
            data-testid="btn-advance"
            onClick={advanceProgress}
            disabled={progress === 100}
          >
            more
          </button>
        </div>
      </div>
    </div>
  );
}