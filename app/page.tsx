import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import ProgressTracker from './components/ProgressTracker';
import InputTracker from './components/InputTracker';
import TaskManager from './components/TaskManager';
import Modal from './components/Modal';
import Accordion from './components/Accordion';
import NotificationPanel from './components/NotificationPanel';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div id="app-root" className="d-flex flex-column min-vh-100 bg-light" data-testid="app-root">
      <Navbar />
      
      <div className="d-flex flex-grow-1">
        <Sidebar />
        
        <main id="main-container" className="container-fluid p-4" data-testid="main-container">
          <header className="mb-4 border-bottom pb-3">
            <h1 id="main-title" className="display-6 fw-bold text-dark" data-testid="main-title">
              DOM Testing Environment
            </h1>
            <p className="text-muted fs-5">
              here there are some components that can be used to test DOM manipulation
            </p>
          </header>

          <section className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <ProgressTracker />
            </div>
            <div className="col">
              <InputTracker />
            </div>
            <div className="col">
              <TaskManager />
            </div>
            <div className="col">
              <Accordion />
            </div>
            <div className="col">
              <Modal />
            </div>
            <div className="col">
              <NotificationPanel />
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}