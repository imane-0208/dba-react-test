// import 'bootstrap'
// import { Link } from "react-router-dom";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md"
import { FaLock } from '@react-icons/all-files/fa/FaLock';


function Header() {
    return (
        <header className="fixed-top bg-white pb-3 ">
        <div className="container">
            <div className="d-flex justify-content-between py-4 px-3 ">
                <div className="text-primary-color">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical text-primary-color" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      </svg>
                </div>
                <div>
                    <h1 className="text-gray90">LOGO</h1>
                </div>
                <div>
                    <span className="me-3">
                        <img src={"../assets/images/Group 6.svg"} alt=""/>
                    </span>
                    <span >
                        <img src="../assets/images/qr-code.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="top-bar-shadow rounded-pill">
                <div className="row m-0 justify-content-center ">
                    <a href="https://#" className="col btn rounded-pill btn-padding font-14 text-gray90 btn-active">
                        <span className='me-1'><FaLock/></span><span>Magasins</span>
                    </a>
                    <a href="https://#" className="col btn rounded-pill btn-padding font-14 text-gray90">
                        <span className='me-1'><MdRestaurantMenu/></span><span>Restauration</span>
                    </a>
                    <a href="https://#" className="col btn rounded-pill btn-padding font-14 text-gray90">
                        <span className='me-1'><BsExclamationCircleFill/></span> <span>Informations</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;
