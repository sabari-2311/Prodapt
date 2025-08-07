import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mb-4">
        <h2 className="text-center mb-3">Dashboard</h2>
        <p className="text-center text-muted mb-4">
          Welcome to your dashboard! Here you can manage your profile, view your activity, and access quick links.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Profile</h5>
                <p className="card-text">View and edit your personal information.</p>
                <a href="/profile" className="btn btn-outline-primary btn-sm">Go to Profile</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-image fs-1 text-success mb-3"></i>
                <h5 className="card-title">Gallery</h5>
                <p className="card-text">Browse your favorite images and memories.</p>
                <a href="/gallery" className="btn btn-outline-success btn-sm">View Gallery</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-envelope fs-1 text-warning mb-3"></i>
                <h5 className="card-title">Contact</h5>
                <p className="card-text">Reach out for support or feedback.</p>
                <a href="/contact" className="btn btn-outline-warning btn-sm">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;