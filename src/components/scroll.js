import 'bootstrap/dist/css/bootstrap.min.css'

function scrollGallery() {
  return (
    <>

        <h1 className="text-primary-color text-center mt-3 mb-4  ">EVENEMENTS TENDANCES</h1>
        
            <div className="container-scroll">
                <div className=" text-center scroll-item ">
                <div className='scroll-content'>
                    <div className="pickgradient">
                    <div className="scroll-caption">
                        <h5>LOREM EPSUM</h5>
                        <p className="px-0 mx-0">20 oct - 25 nov</p>
                    </div>
                        <img src="../assets/images/Mask Group 6.png" alt=""/>
                        
                    </div>
                    
                </div>
                </div>
                <div className=" text-center scroll-item">
                    <div className='scroll-content'>
                        <div className="pickgradient">
                        <div className="scroll-caption">
                        <h5>LOREM EPSUM</h5>
                        <p className="px-0 mx-0">20 oct - 25 nov</p>
                    </div>
                            <img src="../assets/images/Mask Group 6.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className=" text-center scroll-item">
                    <div className='scroll-content'>
                        <div className="pickgradient">
                        <div className="scroll-caption">
                        <h5>LOREM EPSUM</h5>
                        <p className="px-0 mx-0">20 oct - 25 nov</p>
                    </div>
                            <img src="../assets/images/Mask Group 6.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        
        <div className="text-center"><a href="https://#" className="col btn rounded-pill py-2 px-5 mt-4 mb-5 justify-content-center text-gray90 btn-active">Voir toutes les actualités</a></div>
        

    </>
  );
}

export default scrollGallery;