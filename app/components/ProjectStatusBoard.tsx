'use client';

import React, { useState } from 'react';

interface ReportItem { // modelo
  id: number;
  title: string;
  category: string;
  isActive: boolean;
}

export default function ProjectStatusBoard() {
  const reportsData: ReportItem[] = [ // DIccionario para indexar
    { id: 1, title: 'Tank Filling Process Analysis', category: 'league of leguends', isActive: true },
    { id: 2, title: 'SAYUDAA', category: 'Research og yes', isActive: true },
    { id: 3, title: 'NEjemplo', category: 'Developmen', isActive: false },
    { id: 4, title: 'DOM Manipulation Report', category: 'Technical', isActive: true }
  ];

  const [showOnlyActive, setShowOnlyActive] = useState<boolean>(false); // Estado controlador de status 

  const filteredReports = reportsData.filter(report => { // filtrar por estado
    if (showOnlyActive) {
      return report.isActive === true;
    }
    return true;
  });

  return ( // renderizado de la interfaz
    <div className='p-4 border rounded shadow' style={{ fontFamily: 'Arial', backgroundColor: 'hsl(0, 0%, 100%)', borderColor: 'hsl(210, 7%, 85%)' }}>
      <h2 className='fs-4 mb-3' style={{ color: 'hsl(210, 7%, 30%)', textDecoration: 'none', fontWeight: 'normal' }}>
        Project Status Board
      </h2>
      
      <button 
        onClick={() => setShowOnlyActive(!showOnlyActive)}
        className='btn mb-4 border'
        style={{ backgroundColor: 'hsl(210, 7%, 45%)', color: 'hsl(0, 0%, 100%)', borderColor: 'hsl(210, 7%, 40%)', fontWeight: 'normal' }}
      >
        {showOnlyActive ? 'Show All Records' : 'Hide Inactive Records'}
      </button>

      <div className='d-flex flex-column gap-3'>
        {filteredReports.map((report) => (
          <div key={report.id} className='p-3 border rounded' style={{ backgroundColor: 'hsl(210, 3%, 97%)', borderColor: 'hsl(210, 7%, 85%)' }}>
            <h3 className='fs-5 m-0' style={{ color: 'hsl(210, 7%, 20%)', fontWeight: 'normal', textDecoration: 'none' }}>
              {report.title}
            </h3>
            <p className='small mb-2' style={{ color: 'hsl(210, 7%, 50%)' }}>
              Category: {report.category}
            </p>
            
            {report.isActive ? (
              <span className='badge' style={{ backgroundColor: 'hsl(210, 7%, 80%)', color: 'hsl(210, 7%, 20%)', fontWeight: 'normal' }}>
                Active
              </span>
            ) : null}

            {!report.isActive ? (
              <span className='badge' style={{ backgroundColor: 'hsl(210, 3%, 92%)', color: 'hsl(210, 7%, 50%)', fontWeight: 'normal' }}>
                Inactive
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}