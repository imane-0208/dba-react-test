import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/layouts/header';
import Navbar from '../components/layouts/navigation'
import TopSlider from '../components/topslider'
import ScrollGallery from '../components/scroll';
import Slider from '../components/slider'
import Marques from '../components/marques'
function HomePage() {
  return (
    <div class="container">
        <div class="col-12">

            <Header></Header>
            <div class="content">
                <TopSlider></TopSlider>

                <ScrollGallery></ScrollGallery>
                
                <Slider></Slider>


                <Marques></Marques>
                
            </div>

            <Navbar></Navbar>

        </div>
    </div>
  );
}

export default HomePage;
