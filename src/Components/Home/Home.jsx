import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";

// ..
AOS.init();

const Home = () => {
  const [dailyMeal, setDailyMeal] = useState(500);
  const [happyClients, setHappyClients] = useState(450);
  const [parcelToday, setParcelToday] = useState(90);

  useEffect(() => {
    Aos.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
    });

    const interval = setInterval(() => {
      setDailyMeal((dailyMeal) => Math.min(dailyMeal + 1, 600));
      setHappyClients((happyClients) => Math.min(happyClients + 1, 550));
      setParcelToday((parcelToday) => Math.min(parcelToday + 1, 170));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* carousel section */}
      <div className="">
        <div className="carousel h-full w-full">
          <div
            id="slide1"
            className="carousel-item relative rounded w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "650px",
            }}
          >
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mt-20 top-2/3">
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❯
              </a>
            </div>
            <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <TypeAnimation
                sequence={["Welcome to", 500, "Cuisine Craze", 500]}
                className="text-4xl lg:text-7xl"
                style={{
                  fontFamily: "Brush Script MT, cursive",
                  background: "-webkit-linear-gradient(#ffff, #FAD959)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textFillColor: "transparent",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "650px",
            }}
          >
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mt-20 top-2/3 ">
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <TypeAnimation
                sequence={["We Serve", 600, "Quality Food", 600]}
                style={{
                  fontSize: "2em",
                  fontFamily: "Verdana, sans-serif",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "650px",
            }}
          >
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 mt-20 top-2/3 ">
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text=yellow me-3 hover:bg-yellow-500 hover:text-white border border-yellow-500"
              >
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <TypeAnimation
                sequence={[
                  " Experience authentic Chinese cuisine like never before.",
                  1500,
                  " Experience authentic Chinese cuisine  Experience the Culinary Delights You Deserve  ",
                  90,
                ]}
                className="text-xl lg:text-3xl"
                style={{
                  fontFamily: "Verdana, sans-serif",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
      {/* About section */}

      <div>
        <div className="mt-8 mx-10 text-start lg:mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 mt-2  lg:mt-20 lg:pt-20  lg:pb-20">
            <div className=" text-start">
              <div data-aos="fade-in">
                <h1 className="text-black text-5xl  mb-5 mt-12 font-semibold ">
                  About{" "}
                  <span
                    className="text-yellow-500"
                    style={{
                      fontFamily: "Brush Script MT, cursive",
                    }}
                  >
                    Us{" "}
                  </span>{" "}
                </h1>
              </div>

              <div data-aos="fade-down-right">
                <p className="mt-4  mb-3 me-3 text-xl ">
                  Welcome to Cuisine Craze, your destination for authentic and
                  delicious Chinese cuisine! where we offer a tantalizing
                  journey into the world of authentic Chinese cuisine. We take
                  pride in delivering the finest Chinese food that not only
                  tantalizes your taste buds but also nourishes your soul.
                </p>

                <Link
                  to="/about"
                  className="btn bg-yellow-500 border border-0 mt-4 mb-7"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" border rounded "
            >
              <img
                src="https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* background text */}
      <section
        className="bg-cover bg-center mt-10 flex items-center justify-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
          height: "400px",
        }}
      >
        <div
          className="text-center"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="5000"
        >
          <h1 className="text-white text-2xl lg:text-5xl tracking-widest  mb-5 mt-12 font-semibold ">
            <span
              className="text-yellow-500"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              True Passion
            </span>
          </h1>
          <div data-aos="fade-right">
            <p className="text-2xl lg:text-4xl tracking-widest font-bold text-white mt-4">
              Natural Flavors
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="mt-20">
        <div data-aos="fade-down">
          <h1 className="text-black text-5xl  text-center mb-5 mt-12 font-semibold ">
            Our
            <span
              className="text-yellow-500 ms-3"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              Services{" "}
            </span>{" "}
          </h1>
        </div>
        <div data-aos="fade-up-right">
          <h1 className="text-gray-500 text-2xl lg:text-4xl  text-center mb-10 font-semibold ">
            Quality & Passion with Our Services
          </h1>
        </div>
        {/* services card */}

        <div
          className=" grid grid-cols-1 lg:grid-cols-4 mx-10 lg:mx-20 gap-2 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* card1 */}
          <div className="card card-compact w-70  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=740&t=st=1683899251~exp=1683899851~hmac=5eeae6b190510c13fe15b71cef3391d8b1d90988c4e0384d58ad971c7119c756"
                alt="Food"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-yellow-500 font-bold text-2xl">
                Fresh Food
              </h2>
              <p className="text-base">
                Experience fresh, local, and organic ingredients in our
                seasonally-inspired menu. Savor the difference in every bite and
                indulge in a unique dining experience.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          {/* card2 */}
          <div className="card card-compact w-70 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/sparkling-glassware-stands-long-table-prepared-wedding-di_8353-688.jpg?w=740&t=st=1683898542~exp=1683899142~hmac=2e61e7c3abe315aa34b2afb32ba23971300c8192b74122b4104cb8cde628701e"
                alt="Catering"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-yellow-500 font-bold">
                Catering
              </h2>
              <p className="text-base">
                Our catering services offer customizable menus and professional
                service to make your occasion unforgettable. Contact us to
                discuss your needs.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          {/* card3 */}
          <div className="card card-compact w-70 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/close-up-chef-cooking-restaurant-kitchen_329181-16153.jpg?w=740&t=st=1683898754~exp=1683899354~hmac=f5f78127daba5a58377b7964de56de41543ccb9b3c80731df2e14a9e8d784ad4"
                alt="chefs"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-yellow-500 font-bold">
                Top Chef
              </h2>
              <p className="text-base">
                Our top chef brings years of culinary expertise to the table,
                creating innovative dishes that are as beautiful as they are
                delicious. Come taste the passion in every bite.
              </p>
            </div>
          </div>
          {/* card4 */}
          <div className="card card-compact w-70 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=740&t=st=1683899033~exp=1683899633~hmac=364aadce10d391b11b545a3a81572bd5f3c631e071d018eb15a6ca9880026bdb"
                alt="online delivery"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-2xl text-yellow-500 font-bold">
                Online Delivery
              </h2>
              <p className="text-base">
                Can't make it to our Cuisine? No problem. We offer online
                ordering and delivery services, so you can enjoy our fresh food
                from the comfort of your own home.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </section>

      {/* happy hours section */}

      <section
        className="bg-cover bg-center mt-10 flex items-center justify-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/top-view-tasty-shaurma-sliced-pita-sandwich-with-french-fries-ketchup-dark-surface_140725-154955.jpg?w=740&t=st=1683964686~exp=1683965286~hmac=63e628bf9bf7cace23ba0a6a325f388d45e60b796fc867e5256933eeae66a6b5)`,
          height: "400px",
        }}
      >
        <div class="grid grid-cols-1 lg:grid-cols-5  lg:gap-7">
          <div
            className="text-center"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <h1
              style={{ fontFamily: "Brush Script MT, cursive" }}
              className="text-yellow-500 text-2xl lg:text-3xl tracking-widest  mb-5 mt-12 font-semibold "
            >
              Daily Meals
            </h1>
            <p className="text-2xl font-semibold">
              <span className="count text-white">{dailyMeal}</span>
            </p>
          </div>

          <div
            className="text-center"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <h1
              style={{ fontFamily: "Brush Script MT, cursive" }}
              className="text-yellow-500 text-2xl lg:text-3xl tracking-widest  mb-5 mt-12 font-semibold "
            >
              Parcel Today
            </h1>
            <p className="text-2xl font-semibold">
              <span className="count text-white">{parcelToday}</span>
            </p>
          </div>

          <div
            className="text-center"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <h1
              style={{ fontFamily: "Brush Script MT, cursive" }}
              className="text-yellow-500 text-2xl lg:text-3xl tracking-widest  mb-5 mt-12 font-semibold "
            >
              Happy Clients
            </h1>
            <p className="text-2xl font-semibold">
              <span className="count text-white">{happyClients}</span>
            </p>
          </div>
        </div>
      </section>

      {/* chef section */}
      <section className="mt-20">
        <div data-aos="fade-down">
          <h1 className="text-black text-5xl  text-center mb-5 mt-12 font-semibold ">
            Our
            <span
              className="text-yellow-500 ms-3"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              Chefs{" "}
            </span>{" "}
          </h1>
        </div>
        <div data-aos="fade-up-right">
          <h1 className="text-gray-500 text-2xl lg:text-4xl  text-center mb-10 font-semibold ">
            Our Special Chefs
          </h1>
        </div>

        <div
          className="card w-96 h-100 bg-base-100 shadow-xl"
          data-aos="zoom-in-up"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="chef"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mr. Bean</h2>
            <p>Famous Chef</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* instagram */}

      <section className="mt-20">
        <div data-aos="fade-down">
          <h1 className="text-black text-5xl  text-center mb-5 mt-12 font-semibold ">
            Stay{" "}
            <span
              className="text-yellow-500 ms-3"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              Connected{" "}
            </span>{" "}
          </h1>
        </div>
        <div data-aos="fade-up-right">
          <h1 className="text-gray-600 text-2xl lg:text-4xl  text-center mb-10 font-semibold ">
            Follow on Instagram
          </h1>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-5 mx-10 mb-20"
          data-aos-duration="3000"
        >
          <div className="h-100" data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/1833337/pexels-photo-1833337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="fade-up-left">
            <img
              src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="fade-up-right">
            <img
              src="https://images.pexels.com/photos/2734288/pexels-photo-2734288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="flip-left">
            <img
              src="https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="flip-right">
            <img
              src="https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="flip-left">
            <img
              src="https://images.pexels.com/photos/2689421/pexels-photo-2689421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-100" data-aos="flip-right">
            <img
              src="https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
