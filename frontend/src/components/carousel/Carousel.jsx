import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'; 

const cards = [
  {
    title: "Dr Haley",
    description: "Crdiologist",
    image: "https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578393_640.png",
  },
  {
    title: "Dr Abhinav",
    description: "Neorologist",
    image: "https://cdn.pixabay.com/photo/2024/03/30/01/07/woman-8663875_640.png",
  },
  {
    title: "Dr Jayashree",
    description: "Dentist",
    image: "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_640.png",
  },
  {
    title: "Dr Yashi",
    description: "Surgeon",
    image: "https://cdn.pixabay.com/photo/2017/05/23/17/12/doctor-2337835_640.jpg",
  },
  {
    title: "Dr Kevin",
    description: "Dermatalogist",
    image: "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019518_640.png",
  },
  {
    title: "Dr Jay",
    description: "Dentist",
    image: "https://cdn.pixabay.com/photo/2024/02/21/15/01/doctor-8587851_640.png",
  },
];


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      ▶
    </div>
  );
};


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      ◀
    </div>
  );
};

function Carousel() {
  const settings = {
    dots: true,  
    infinite: true, 
    speed: 500,  
    slidesToShow: 3, 
    slidesToScroll: 1,  
    arrows: true, 
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />, 
    responsive: [  
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-info">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
