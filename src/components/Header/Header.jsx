// import React from 'react'
// import w from '../pics/w.jpg'
// import { Link } from 'react-router-dom'
// import './Header.css'

// function Header() {
//     const style = {width: "70px"}
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary ">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#"><img src={w} alt="" classNameName='img-fluid' style={style}/></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
//       <ul className="navbar-nav ">
//         <li className="nav-item">
//           <Link to='/'>Mr Smoky </Link>
//         </li>
//         <li className="nav-item">
//         <Link to='/CoachA'>Coach Austine</Link>
//         </li>
//         <li className="nav-item">
//         <Link to='/CoachC'>Coach Christ Benson</Link>
//         </li>
      
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Header
import React from 'react';
import w from '../pics/w.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const style = { width: '70px' };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={w} alt="Brand" className="img-fluid" style={style} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Mr Smoky
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CoachA">
                  Coach Austine
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CoachC">
                  Coach Christ Benson
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/All">
                  All Smoky Admins
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="Review">
                  My review
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
