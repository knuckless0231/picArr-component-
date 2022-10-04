import s from "./Picarr.module.css"
import { useState, React } from 'react';



const Picarr = ({ state }) => {


  const [currentIndex, setCurrentIndex] = useState(0);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? state.flickr_images : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === state.flickr_images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  return (

    <div className={s.sliderStyles}>

      <div >
        <img src={state.flickr_images} сlassName={s.arrlogos} alt="" />
      </div>


      <div onClick={goToPrevious} className={s.leftArrow}>
        ❰
      </div>
      <div onClick={goToNext} className={s.rightArrow}>
        ❱
      </div>


      <div className={s.dotsContainerStyles}>
        {state.flickr_images.map((slide, index) => (
          <div className={s.dotStyle} key={index} onClick={() => goToSlide(index)}>
            ●
          </div>
        ))}


      </div>
    </div>

  );

};


export default Picarr;


// const flickrimages = [
//   "https://i.imgur.com/9fWdwNv.jpg",
//   "https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg",
//   "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
//   "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg"
// ];
