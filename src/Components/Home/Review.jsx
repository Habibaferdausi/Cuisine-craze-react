import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio id nisi sagittis rhoncus. Sed venenatis quam vitae augue venenatis, sit amet tristique nisl ullamcorper.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      review:
        "Nulla lacinia consequat lorem, eu efficitur orci semper ac. Sed convallis sem sit amet commodo condimentum. In hac habitasse platea dictumst.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },

    {
      id: 3,
      name: "David Johnson",
      rating: 4,
      review:
        "Phasellus mollis semper viverra. Sed congue, turpis nec iaculis aliquet, odio purus rhoncus nunc, eu egestas dolor augue eu odio. Curabitur sed libero eget neque volutpat pellentesque vitae sit amet arcu.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      name: "Emily Brown",
      rating: 5,
      review:
        "Vestibulum mattis mauris eget mauris lacinia tempus. Sed pharetra consectetur enim a consequat. Duis commodo tincidunt ligula, in volutpat nisl tempus et.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ];

  return (
    <div className=" mt-10  pt-8 lg:mt20  lg-pt-20  mb-10 lg:mb-20 lg:pb-20  mx-11 lg:mx-20 px-7 lg:px-10">
      <div data-aos="fade-down" className="mb-10">
        <h1 className="text-black text-5xl  text-center mb-5 mt-12 font-semibold ">
          Customer
          <span
            className="text-yellow-500 ms-3"
            style={{
              fontFamily: "Brush Script MT, cursive",
            }}
          >
            Reviews{" "}
          </span>{" "}
        </h1>
      </div>
      <div className="reviews-slider-wrapper h-96">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="mx-auto">
              <div className="flex justify-center mt-10  items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 mr-1">&#9733;</span>
                    <span>{review.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center">{review.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
