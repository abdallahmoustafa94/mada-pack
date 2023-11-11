import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import navbarScrollEffect from "@common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light style-14" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown" >
              <a className="nav-link active" href="/" id="navbarDropdown1" role="button"
                aria-expanded="false">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">
                  من نحن
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className="nav-link">
                  منتجاتنا
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">
                  {/* <img src="//assets/img/icons/nav_icon/price.png" alt="" className="icon-15 me-1"> */}
                  اتصل بنا
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-side mt-3 mt-lg-0">
          
            <a href="tel:00201114447801" className="btn rounded-pill text-white bg-red1 shadow-lg fw-bold" >
              <small> أطلب عرض الأسعار </small>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar