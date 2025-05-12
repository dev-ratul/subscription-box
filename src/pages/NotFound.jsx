import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-600">404</h1>
          <p className="text-xl mt-4">Page Not Found</p>
          <a href="/" className="btn btn-primary mt-6">Go Home</a>
        </div>
      </div>
    );
};

export default NotFound;