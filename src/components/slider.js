import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function Slider() {
  return (
    <>

        <h1 className="text-primary-color text-center mb-5  ">QUESTIONAIRES</h1>
        <Carousel>
            <Carousel.Item>
            <div className="pickgradient">
                    <img
                    className="d-block w-100"
                    src={"../assets/images/slider2.png"} 
                    alt="Second slide"
                />
                </div>

                <p className=" pill col btn rounded-pill justify-content-center text-gray90 btn-active btn-slider">100 points</p>
                <Carousel.Caption>
                <div className='rounded-pill   justify-content-center text-gray90'></div>
                <h2>ANFAPLACE MALL</h2>
                <p>www.anfaplace.ma</p>
                <a href="https://#" className="col btn rounded-pill   justify-content-center text-gray90 btn-active btn-slider">Je participe</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="pickgradient">
                    <img
                    className="d-block w-100"
                    src={"../assets/images/slider2.png"} 
                    alt="Second slide"
                />
                </div>
                <p className=" pill col btn rounded-pill justify-content-center text-gray90 btn-active btn-slider">100 points</p>

                <Carousel.Caption>
                <h2>ANFAPLACE MALL</h2>
                <p>www.anfaplace.ma</p>
                <a href="https://#" className="col btn rounded-pill  justify-content-center text-gray90 btn-active btn-slider">Je participe</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="pickgradient">
                    <img
                    className="d-block w-100"
                    src={"../assets/images/slider2.png"} 
                    alt="Second slide"
                />
                </div>
                <p className=" pill col btn rounded-pill justify-content-center text-gray90 btn-active btn-slider">100 points</p>

                <Carousel.Caption>
                <h2>ANFAPLACE MALL</h2>
                <p>www.anfaplace.ma</p>
                <a href="https://#" className="col btn rounded-pill px-4 justify-content-center text-gray90 btn-active btn-slider">Je participe</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        

    </>
  );
}

export default Slider;