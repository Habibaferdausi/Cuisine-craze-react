import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [dailyMeal, setDailyMeal] = useState(500);
  const [happyClients, setHappyClients] = useState(450);
  const [parcelToday, setParcelToday] = useState(90);
  const [onlineStore, setOnlineStore] = useState(50);

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
      setOnlineStore((onlineStore) => Math.min(onlineStore + 2, 110));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center bg-transparent relative rounded flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
          height: "300px",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

        <div className="text-center rounded absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl lg:text-5xl lg:p-4 font-semibold">
            About Us
          </h1>
        </div>
      </div>

      <div>
        <div className="mt-8 m mx-10 text-start lg:mt-20">
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

      <div
        className="flex flex-wrap mt-10  mb-10 justify-center "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-616.jpg?w=826&t=st=1683966052~exp=1683966652~hmac=74b23f13ead9b895866cd3e71955a05dc007a2974bcddbad73977ec77555f665')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div class="grid grid-cols-1 lg:grid-cols-7 gap-7">
          <div
            className="text-center"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000"
          >
            <h1
              style={{ fontFamily: "Brush Script MT, cursive" }}
              className="text-yellow-500 text-2xl lg:text-3xl ms-3 tracking-widest  mb-5 mt-12 font-semibold "
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
            data-aos-duration="5000"
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
            data-aos-duration="5000"
          >
            <h1
              style={{ fontFamily: "Brush Script MT, cursive" }}
              className="text-yellow-500 text-2xl lg:text-3xl  tracking-widest  mb-5 mt-12 font-semibold "
            >
              Happy Clients
            </h1>
            <p className="text-2xl font-semibold">
              <span className="count text-white">{happyClients}</span>
            </p>
          </div>
          <div
            className="text-center"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000"
          >
            <h1
              style={{ fontFamily: "Brush Script MT, cursive" }}
              className="text-yellow-500 text-2xl lg:text-3xl tracking-widest  mb-5 mt-12 font-semibold "
            >
              Online Store
            </h1>
            <p className="text-2xl font-semibold">
              <span className="count text-white">{onlineStore}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
