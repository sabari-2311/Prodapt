import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto w-100" style={{ position: 'fixed', bottom: 0, left: 0 }}>
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
