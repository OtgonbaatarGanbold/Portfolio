import { Component } from "react";
import Slider from "react-slick";
import "../../css/slick.css"
import "../../css/slick-theme.css";
import img from '../../Assets/Gallary/caveman.jpg';
import img1 from '../../Assets/Gallary//knight.jpg';
import img2 from '../../Assets/Gallary/1.jpg';
import img3 from '../../Assets/Gallary/2.jpg';
import img4 from '../../Assets/Gallary/glassPlanet.jpg';
import img5 from '../../Assets/Gallary/s.jpg';

export default class MultipleItems extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: false
            }
          }
        ]
      };
    return (
      <div className="mt-24 w-full flex flex-col items-center">
        <h1 className="uppercase text-xl text-white font-mono">My creation</h1>
        <Slider {...settings} className="m-6 w-full gap-2 md:w-5/6 md:gap-8">
        
            <div className="flex">
                    <img src={img} alt={"allo"} className="w-64 h-128 rounded-3x"/>
            </div>
            
            <div className="flex">
                    <img src={img1} alt={"allo"} className="w-64 h-128 rounded-3x"/>
            </div>
            
            <div className="flex">
                    <img src={img2} alt={"allo"} className="w-64 h-128 rounded-3x"/>
            </div>
            
            <div className="flex">
                    <img src={img3} alt={"allo"} className="w-64 h-128 rounded-3x"/>
            </div>
            
            <div className="flex">
                    <img src={img4} alt={"allo"} className="w-64 h-128 rounded-3x"/>
            </div>
            
            <div className="flex">
                    <img src={img5} alt={"allo"} className="w-64 h-128 rounded-3x"/>
            </div>
            
        </Slider>
      </div>
    );
  }
}