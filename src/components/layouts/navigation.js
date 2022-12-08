import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function Navbar() {
    return (
            <div className="fixed-bottom bg-white">
                <div className="rounded-navigate-top navigate-shadow m-0 p-0" >
                    <div className="rounded-top row m-0 p-3 px-4">
                        <a href="https://#" className="col btn rounded-pill py-2  text-gray90 navigate-active">
                            <img src="../assets/images/Icon material-home.svg" className="pe-2" alt=""/><span className="text-primary-color">Accueil</span>
                        </a>
                        <a href="https://#" className="col btn rounded-pill py-2 text-gray90">
                            <img src="../assets/images/Icon awesome-car-alt.svg" alt=""/>
                        </a>
                        <a href="https://#" className="col btn rounded-pill py-2 text-gray90">
                            <img src="../assets/images/Icon awesome-user-alt.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
    );
  }
  
  export default Navbar;