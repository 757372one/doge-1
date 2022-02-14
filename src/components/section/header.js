import React from 'react';

export function Header() {

  return (
      <nav className='nav'>
        <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
        <div className='mobile-shrink'>
                <div className="title">
                  <div className='cool-text'>DOGE-1</div>
                </div>
              </div>
        </div>
      </nav>
  );
}