import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=400&h=200&fit=crop',
      title: 'Beach',
      desc: 'Relaxing beach view'
    },
    {
      url: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=400&h=200&fit=crop',
      title: 'Sun',
      desc: 'Beautiful sunrise'
    },
    {
      url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=400&h=200&fit=crop',
      title: 'Hills',
      desc: 'Green hills landscape'
    },
    {
      url: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&w=400&h=200&fit=crop',
      title: 'Scenery',
      desc: 'Stunning scenery'
    },
    {
      url: 'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&w=400&h=200&fit=crop',
      title: 'Nature',
      desc: 'Peaceful nature'
    },
    {
      url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&w=400&h=200&fit=crop',
      title: 'Nature',
      desc: 'Beautiful natural view'
    },
  ];

  const handleImgError = (e) => {
    e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to the Gallery</h1>
      <div className="row">
        {images.map((img, idx) => (
          <div className="col-sm-6 col-md-4 mb-4" key={idx}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={img.url}
                className="card-img-top rounded"
                alt={img.title}
                style={{ objectFit: 'cover', height: '200px', transition: 'transform 0.3s' }}
                onError={handleImgError}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
                <p className="card-text text-muted">{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;