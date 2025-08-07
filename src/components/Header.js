import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-dark text-white py-3 text-center">
      <div className="container">
        <h1 className="mb-0">My React App</h1>
        <p className="lead">Building responsive interfaces with React and Bootstrap</p>
      </div>
    </header>
  );
}

export default Header;
