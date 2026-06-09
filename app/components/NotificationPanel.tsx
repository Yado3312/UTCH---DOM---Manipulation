"use client";
import React, { useState } from 'react';

export default function NotificationPanel() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div id="notification-wrapper" className="card shadow-sm h-100" data-testid="notification-wrapper">
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <h5 className="card-title">Asyncrhonous Alerts</h5>
        <button 
          id="btn-show-notification"
          className="btn btn-info text-white mt-3"
          data-testid="btn-show-notification"
          onClick={() => setIsVisible(true)}
        >
          Click to show a asyncraonous alert 
        </button>

        {isVisible && (
          <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
            <div id="notification-panel" className="toast show" role="alert" data-testid="notification-panel">
              <div className="toast-header bg-info text-white">
                <strong className="me-auto">System Update</strong>
                <button 
                  id="btn-hide-notification"
                  type="button" 
                  className="btn-close btn-close-white" 
                  data-testid="btn-hide-notification"
                  onClick={() => setIsVisible(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div id="notification-content" className="toast-body text-start" data-testid="notification-content">
                If you read this you own me a match in smash bros 
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}