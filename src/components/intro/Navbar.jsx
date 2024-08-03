import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-darkBlue p-4 text-center">
      <div className="text-white grid grid-cols-4 gap-4">
        <div>
          <i className="fas fa-book-open"></i>
          <p>Live Classes</p>
        </div>
        <div>
          <i className="fas fa-chalkboard-teacher"></i>
          <p>Qualified Teachers</p>
        </div>
        <div>
          <i className="fas fa-graduation-cap"></i>
          <p>SAT Assistance</p>
        </div>
        <div>
          <i className="fas fa-book-reader"></i>
          <p>Refresher Courses</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
