import React from 'react';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Card from './components/Card';
// import ProgressTracker from './components/ProgressTracker';
// import InputTracker from './components/InputTracker';
// import TaskManager from './components/TaskManager';
// import Modal from './components/Modal';
// import Accordion from './components/Accordion';
// import NotificationPanel from './components/NotificationPanel';
// import Footer from './components/Footer';
import ProjectStatusBoard from './components/ProjectStatusBoard';

export default function Home() {
  return (
    <div id='app-root' className='d-flex flex-column min-vh-100 bg-light' data-testid='app-root' style={{ fontFamily: 'Arial' }}>
      
      <div className='d-flex flex-grow-1'>
        
        <main id='main-container' className='container-fluid p-4' data-testid='main-container'>
          <header className='mb-4 border-bottom pb-3'>
            <h1 id='main-title' className='display-6' data-testid='main-title' style={{ color: 'hsl(210, 7%, 20%)', fontWeight: 'normal', textDecoration: 'none' }}>
              DOM Testing Environment OH YEAH xd
            </h1>
            <p className='fs-5' style={{ color: 'hsl(210, 7%, 50%)' }}>
              Testing the new project status board
            </p>
          </header>

          <section className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
            {/* 
            <div className='col'>
              <Card />
            </div>
            <div className='col'>
              <ProgressTracker />
            </div>
            <div className='col'>
              <InputTracker />
            </div>
            <div className='col'>
              <TaskManager />
            </div>
            <div className='col'>
              <Accordion />
            </div>
            <div className='col'>
              <Modal />
            </div>
            <div className='col'>
              <NotificationPanel />
            </div>
            */}
            
            <div className='col'>
              <ProjectStatusBoard />
            </div>
          </section>
        </main>
      </div>

    </div>
  );
}