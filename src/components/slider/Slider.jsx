import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import css from './Slider.module.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import Button from "../button/Button";
import TextBlock from "../text-block/TextBlock";

let slides = [{
    id:1,
    src: img1,
    alt: "img1",
    title: "Заголовок слайда",
    link: 'https://gptgo.ai/?hl=ru',
    buttonText: "link1",
    text: "Описание. Может занимать от 1 до 7 строк. Описание. Может занимать от 1 до 7 строк. Описание. Может занимать от 1 до 7 строк. Описание. Может занимать от 1 до 7 строк. Описание. Может занимать от 1 до 7 строк. Описание. Может занимать от 1 до 7 строк. "
}, {
    id:2,
    src: img2,
    alt: "img2",
    title: "Заголовок слайда 2",
    link: 'https://mail.ru/',
    buttonText: "link2",
    text: "Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. "
},{
    id:3,
    src: img1,
    alt: "img2",
    title: "Заголовок слайда 3",
    link: 'https://react-slick.neostack.com/docs/get-started',
    buttonText: "link3",
    text: "Описание 3. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. "
},{
    id:4,
    src: img2,
    alt: "img2",
    title: "Заголовок слайда 4",
    link: 'https://start.cloveri.com/',
    buttonText: "link4",
    text: "Описание 4. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. "
},{
    id:5,
    src: img1,
    alt: "img2",
    title: "Заголовок слайда 5",
    link: 'https://start.cloveri.com/testovye/frontend',
    buttonText: "link5",
    text: "Описание 5. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. Описание 2. Может занимать от 1 до 7 строк. "
}];



const Carousel= (props) => {
    
    //настраиваем слайдер под разные устройства
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              swipeToSlide: true
            }
          },
          {
            breakpoint: 744,
            settings: {
              arrows: false,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 375,
            settings: {
              arrows: false,
              swipeToSlide: true
            }
          }
        ]
    };
    
    return (
        <div className={css.container}>
        
            <Slider {...settings}>

                {slides.map((slide) => (
                    <div className={css.card} key={slide.id}>
                        <div className={css.leftSide}>
                            <TextBlock title={slide.title} text={slide.text}/>
                            <Button type="button" onClick={async() => {window.location.href = slide.link}}>{slide.buttonText}</Button>
                        </div>
                        <div className={css.imageContainer}>
                            <img src={slide.src} alt={slide.alt}/>
                        </div>
                    </div>
                    ))
                } 

            </Slider>
        </div>
    );

}

export default Carousel