'use client';
import { useState } from 'react';

export default function InteractiveLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [helper, setHelper] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage('Error: Password is too short');
      return;
    }

    setMessage('Success: Data ready for server');
  };

  const handleDouble = () => {
    setEmail('');
    setPassword('');
    setMessage('Form cleared');
  };

  const trackKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setMessage('Enter key detected');
    }
  };

  return (
    <div className='d-flex justify-content-center w-100 mt-5'>
      <div className='card border-0 shadow p-4 bg-white rounded w-100' style={{ maxWidth: '400px' }}>
        <form onSubmit={handleLogin}>
          <h3 className='fw-normal mb-4 text-center' style={{ color: '#4A90E2' }}>Login Portal</h3>

          <div className='mb-3'>
            <label className='form-label text-secondary'>Email Address</label>
            <input
              type='email'
              className='form-control bg-light border-0'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label text-secondary'>Password</label>
            <input
              type='password'
              className='form-control bg-light border-0'
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              onFocus={() => setHelper('Must be at least 6 characters')}
              onBlur={() => setHelper('')}
              onKeyDown={trackKey}
            />
            <p className='text-info small mt-1'>{helper}</p>
          </div>

          <div className='d-grid mt-4' style={{ gap: '0.8rem' }}>
            <button type='submit' className='btn border-0 text-white' style={{ backgroundColor: '#4A90E2' }}>
              Access Account
            </button>

            <button type='button' className='btn text-primary border-0' style={{ backgroundColor: '#F0F8FF' }} onDoubleClick={handleDouble}>
              Double Click to Reset
            </button>
          </div>

          <p className='mt-3 text-center text-secondary'>{message}</p>
        </form>
      </div>
    </div>
  );
}