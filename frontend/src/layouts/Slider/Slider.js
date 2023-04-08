import React from 'react';
import classes from './Slider.module.css';
import Slider4 from "../../assets/imgs/image4.png"
import Slider5 from "../../assets/imgs/image5.jpeg"
import Slider6 from '../../assets/imgs/image6.jpeg';
import Slider7 from '../../assets/imgs/image7.jpeg';
import { useState, useEffect } from 'react';

const Slider = () => {
  const [widthChange, setWidth] = useState(0);

  useEffect(() => {
      let timer = setInterval(() => {
          setWidth((prev) => (prev + 1) % 3);
      }, 3000);

      return () => clearInterval(timer);
  }, []);

  return (
      <div className="sliderInterface">
          <div className={classes['img-sliders']} style={{ transform: 'translateX(-' + widthChange * 100 + '%)' }}>
              <div className={classes.sliderItem}>
                  <img src={Slider4} alt="slideshow-1" />
              </div>
              <div className={classes.sliderItem}>
                  <img src={Slider5} alt="slideshow-2" />
              </div>
              <div className={classes.sliderItem}>
                  <img src={Slider7} alt="slideshow-3" />
              </div>
             
          </div>

          <div className={classes['buttons-move']}>
              <div
                  className={classes['button-mov'] + (widthChange === 0 ? ' button-active' : '')}
                  onClick={() => setWidth(0)}
              ></div>
              <div
                  className={classes['button-mov'] + (widthChange === 1 ? ' button-active' : '')}
                  onClick={() => setWidth(1)}
              ></div>
              <div
                  className={classes['button-mov'] + (widthChange === 2 ? ' button-active' : '')}
                  onClick={() => setWidth(2)}
              ></div>
          </div>
      </div>
  );
}

export default Slider;
