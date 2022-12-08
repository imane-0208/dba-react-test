import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function TopSlider() {
  return (
    <>

        <h1 className="text-primary-color text-center my-5 ">THE PLACE TO BE</h1>
        <Carousel>
            <Carousel.Item>
                <div className="pickgradient">
                    <img
                        className="d-block w-100 slider-image"
                        src={"../assets/images/topSlider.png"}
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                <h2 className='m-0'>ANFAPLACE MALL</h2>
                <p className='m-0'>www.anfaplace.ma</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="pickgradient">
                    <img
                    className="d-block w-100 slider-image"
                    src={"../assets/images/topSlider.png"} 
                    alt="Second slide"
                    />
                </div>

                <Carousel.Caption>
                <h2 className='m-0'>ANFAPLACE MALL</h2>
                <p className='m-0'>www.anfaplace.ma</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="pickgradient">
                    <img
                    className="d-block w-100 slider-image"
                    src={"../assets/images/topSlider.png"}
                    alt="Third slide"
                    />
                </div>

                <Carousel.Caption>
                <h2 className='m-0'>ANFAPLACE MALL</h2>
                <p className='m-0'>www.anfaplace.ma</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="text-center"><a href="https://#" className="col btn rounded-pill py-2 px-5 mt-4 mb-5 justify-content-center text-gray90 btn-active">Voir toutes les actualités</a></div>

    </>
  );
}

export default TopSlider;